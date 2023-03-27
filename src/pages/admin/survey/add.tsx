import { getAllQuestion } from '@/api/question';
import AddSurveyFormInput from '@/components/survey/addSurveyFormInput';
import { Question } from '@/types/question';
import { Survey } from '@/types/survey';
import { Button, Checkbox, Flex, Paper, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';

type AddSurveyProps = {
  questions: Question[];
};

export type AddSurveyField = {
  name: keyof Survey | 'question';
  label: string;
  type: 'text' | 'date' | 'number' | 'checkbox';
};

const surveyField: AddSurveyField[] = [
  {
    name: 'place',
    label: 'Lingkungan pelaksanaan survey',
    type: 'text',
  },
  {
    name: 'date',
    label: 'Tanggal survey dilaksanakkan',
    type: 'date',
  },
  {
    name: 'subject',
    label: 'Judul survey',
    type: 'text',
  },
  {
    name: 'respondent',
    label: 'Jumlah responden',
    type: 'number',
  },
  {
    name: 'lecturer',
    label: 'Nama dosen',
    type: 'text',
  },
  {
    name: 'question',
    label: 'Pertanyaan',
    type: 'checkbox',
  },
];

export type SurveyFormValue = Omit<
  Survey,
  'id' | 'questionCount' | 'aspectCount'
> & { question: string[] };

const AddSurvey = ({ questions }: AddSurveyProps) => {
  const form = useForm<SurveyFormValue>({
    initialValues: {
      place: '',
      date: new Date(Date.now()),
      subject: '',
      respondent: '',
      lecturer: '',
      question: [],
    },
  });

  return (
    <Paper shadow='md' p='md' withBorder>
      <form
        onSubmit={form.onSubmit(a => {
          console.log(a);
        })}
      >
        <Stack>
          <AddSurveyFormInput
            form={form}
            surveyFields={surveyField}
            questions={questions}
          />
          <Flex justify={'flex-end'}>
            <Button type='submit'>Submit</Button>
          </Flex>
        </Stack>
      </form>
    </Paper>
  );
};

export async function getStaticProps() {
  const questions = await getAllQuestion();
  return { props: questions };
}

export default AddSurvey;
