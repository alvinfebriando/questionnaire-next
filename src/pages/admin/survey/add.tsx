import { getAllQuestion } from '@/api/question';
import { addSurvey } from '@/api/survey';
import AddSurveyFormInput from '@/components/survey/addSurveyFormInput';
import { Question } from '@/types/question';
import { Survey, SurveyFormValue } from '@/types/survey';
import { Button, Flex, Paper, Stack } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { z } from 'zod';

type AddSurveyProps = {
  questions: Question[];
};

export type AddSurveyField = {
  name: keyof Survey | 'questionId';
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
    name: 'questionId',
    label: 'Pertanyaan',
    type: 'checkbox',
  },
];

const schema = z.object({
  place: z.string().nonempty(),
  date: z.date(),
  subject: z.string().nonempty(),
  respondent: z.number().min(1).max(100),
  lecturer: z.string().nonempty(),
  questionId: z.array(z.string()).nonempty(),
});

const AddSurvey = ({ questions }: AddSurveyProps) => {
  const form = useForm<SurveyFormValue>({
    initialValues: {
      place: '',
      date: new Date(Date.now()),
      subject: '',
      respondent: 0,
      lecturer: '',
      questionId: [],
    },
    validate: zodResolver(schema),
    validateInputOnChange: true,
  });

  const router = useRouter();

  const handleSubmit = (v: typeof form.values) => {
    let survey = {
      ...v,
      date: v.date.toISOString().slice(0, 10),
      questionCount: v.questionId.length,
      aspectCount: 6,
      respondent: v.respondent,
    };
    addSurvey(survey);
    notifications.show({
      title: 'Success',
      message: 'New survey created successfully',
    });
    router.push('/admin/survey');
  };

  const handleError = (e: typeof form.errors) => {
    console.log(e);
  };

  return (
    <Paper shadow='md' p='md' withBorder>
      <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
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
