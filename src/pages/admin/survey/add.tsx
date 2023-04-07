import { getAllLecturer } from '@/api/lecturer';
import { getAllQuestion } from '@/api/question';
import { addSurvey } from '@/api/survey';
import AddSurveyFormInput from '@/components/survey/addSurveyFormInput';
import { Lecturer } from '@/types/lecturer';
import { Question } from '@/types/question';
import { SurveyFormValue } from '@/types/survey';
import { Button, Flex, Paper, Stack } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { z } from 'zod';

type AddSurveyProps = {
  questions: Question[];
  lecturers: Lecturer[];
};

export type AddSurveyField = {
  name: keyof SurveyFormValue | 'questionId';
  label: string;
  type: 'text' | 'date' | 'number' | 'checkbox' | 'select';
};

const surveyField: AddSurveyField[] = [
  {
    name: 'place',
    label: 'Kelas',
    type: 'select',
  },
  {
    name: 'date',
    label: 'Tanggal survey dilaksanakkan',
    type: 'date',
  },
  {
    name: 'subject',
    label: 'Mata kuliah',
    type: 'select',
  },
  {
    name: 'lecturerId',
    label: 'Nama dosen',
    type: 'select',
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
  lecturerId: z.string().uuid().nonempty(),
  questionId: z.array(z.string()).nonempty(),
});

const AddSurvey = ({ questions, lecturers }: AddSurveyProps) => {
  const form = useForm<SurveyFormValue>({
    initialValues: {
      place: '',
      date: new Date(Date.now()),
      subject: '',
      lecturerId: lecturers[0].id,
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
      questions: questions,
      lecturer: v.lecturerId,
    };
    addSurvey(survey);
    notifications.show({
      title: 'Created',
      message: 'New survey created successfully',
      color: 'teal',
    });
    router.push('/admin');
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
            lecturers={lecturers}
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
  const lecturers = await getAllLecturer();
  return { props: { questions, lecturers } };
}

export default AddSurvey;
