import { getAllSurvey } from '@/api/survey';
import SurveyTable from '@/components/survey/surveyTable';
import { SurveyTableRecords, Surveys } from '@/types/survey';
import { Box, Button, Stack } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

const Admin = (surveys: Surveys) => {
  const router = useRouter();

  const createNewSurvey: MouseEventHandler<HTMLButtonElement> = e => {
    router.push('/admin/survey/add');
  };

  const data: SurveyTableRecords[] = surveys.surveys.map(s => {
    return {
      ...s,
      lecturerName: `${s.lecturer.title} ${s.lecturer.name}`,
      lecturerId: s.lecturer.id,
      lecturer: '',
    };
  });

  return (
    <Stack>
      <Box>
        <Button leftIcon={<IconPlus />} onClick={createNewSurvey}>
          New
        </Button>
      </Box>
      <SurveyTable survey={data} role='Admin' />
    </Stack>
  );
};

export async function getStaticProps() {
  const surveys = await getAllSurvey();
  return { props: surveys };
}
export default Admin;
