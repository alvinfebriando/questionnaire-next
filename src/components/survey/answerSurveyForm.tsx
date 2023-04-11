import { sendAnswer, sendAnswerSimulation } from '@/api/answer';
import { Answer } from '@/types/answer';
import { SurveyResponse } from '@/types/survey';
import { Box, Button, Checkbox, NumberInput, Stack } from '@mantine/core';
import { UUID } from 'crypto';
import { useRouter } from 'next/router';
import { ChangeEventHandler, useState } from 'react';
import { Model } from 'survey-core';
import 'survey-core/modern.min.css';
import { Survey as SurveyRender } from 'survey-react-ui';

type SurveyFormProps = {
  survey: SurveyResponse;
  isAdmin: boolean;
};

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const SurveyForm = ({ survey, isAdmin }: SurveyFormProps) => {
  const router = useRouter();

  const [isSimulation, setIsSimulation] = useState(false);
  const [n, setN] = useState(1);

  const handleSimulationChange: ChangeEventHandler<HTMLInputElement> = e => {
    setIsSimulation(e.currentTarget.checked);
  };

  const model = generateSurveyModel(survey);

  model.onComplete.add((sender, options) => {
    options.showSaveInProgress('Saving...');
    options.showSaveSuccess('Success');
    let data = model.getPlainData().map(d => ({
      name: d.name,
      value: d.value,
    }));
    const answer: Answer[] = data.map(d => ({
      surveyId: survey.id,
      questionId: d.name as UUID,
      score: d.value,
    }));

    if (!isSimulation) {
      sendAnswer(answer);
    } else {
      sendAnswerSimulation(answer, n);
    }
    if (!isAdmin) {
      router.push('/survey');
    } else {
      router.push('/admin');
    }
  });

  const handleRandomize = () => {
    survey.questions.map(s => {
      model.setValue(s.id, randomIntFromInterval(1, 5));
    });
  };

  return (
    <Stack>
      {isAdmin ? (
        <Stack>
          <Box>
            <Button onClick={handleRandomize}>Randomize Answer</Button>
          </Box>
          <Box>
            <Checkbox
              label='Mode simulasi'
              checked={isSimulation}
              onChange={handleSimulationChange}
            />
          </Box>
          <Box sx={{ width: '200px' }}>
            <NumberInput
              label='Berapa jumlah responden'
              min={1}
              max={100}
              disabled={!isSimulation}
              value={n}
              onChange={e => setN(e as number)}
            />
          </Box>
        </Stack>
      ) : null}
      <SurveyRender model={model} />;
    </Stack>
  );
};

function generateSurveyModel(survey: SurveyResponse) {
  const modelElements = {
    elements: survey.questions.map(q => ({
      name: q.id,
      title: q.question,
      type: 'radiogroup',
      isRequired: true,
      colCount: 5,
      choices: [1, 2, 3, 4, 5],
    })),
  };
  return new Model(modelElements);
}

export default SurveyForm;
