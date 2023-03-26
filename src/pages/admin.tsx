import { getAllSurvey } from '@/api/survey';
import { AllSurveyResponse } from '@/api/types';
import SurveyTable from '@/components/survey/surveyTable';
import { Box, Button, Stack } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { MouseEventHandler } from 'react';

const createNewSurvey: MouseEventHandler<HTMLButtonElement> = e => {
  console.log(e.currentTarget);
};

const Admin = (surveys: AllSurveyResponse) => {
  console.log(surveys);
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
