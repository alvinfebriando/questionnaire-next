import { getAllSurvey } from '@/api/survey';
import { Surveys } from '@/types/survey';
import SurveyTable from '@/components/survey/surveyTable';
import { Box, Button, Stack } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

const Admin = (surveys: Surveys) => {
  const router = useRouter();

  const createNewSurvey: MouseEventHandler<HTMLButtonElement> = e => {
    router.push('/admin/survey/add');
  };

  return (
    <Stack>
      <Box>
        <Button leftIcon={<IconPlus />} onClick={createNewSurvey}>
          New
        </Button>
      </Box>
      <SurveyTable survey={surveys} role='Admin' />
    </Stack>
  );
};

export async function getStaticProps() {
  const surveys = await getAllSurvey();
  return { props: surveys };
}
export default Admin;
