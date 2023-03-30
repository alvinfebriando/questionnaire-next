import { Survey } from '@/types/survey';
import { Box, Button, Stack } from '@mantine/core';
import { Model } from 'survey-core';
import 'survey-core/modern.min.css';
import { Survey as SurveyRender } from 'survey-react-ui';

type SurveyFormProps = {
  survey: Survey;
};

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const SurveyForm = ({ survey }: SurveyFormProps) => {
  const model = generateSurveyModel(survey);

  model.onComplete.add((sender, options) => {
    options.showSaveInProgress('Saving...');
    options.showSaveSuccess('Success');
    let data = model.getPlainData();
    let a = data.map(d => ({
      name: d.name,
      value: d.value,
    }));
    console.log(a);
  });

  const handleRandomize = () => {
    survey.questions.map(s => {
      model.setValue(s.id, randomIntFromInterval(1, 5));
    });
  };

  return (
    <Stack>
      <Box>
        <Button onClick={handleRandomize}>Randomize Answer</Button>
      </Box>
      <SurveyRender model={model} />;
    </Stack>
  );
};

function generateSurveyModel(survey: Survey) {
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
