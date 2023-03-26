import { AllSurveyResponse } from '@/api/types';
import { getAllSurvey } from '@/api/survey';
import SurveyTable from '@/components/survey/surveyTable';

const Survey = (surveys: AllSurveyResponse) => {
  return <SurveyTable survey={surveys} role='Respondent' />;
};

export async function getStaticProps() {
  const surveys = await getAllSurvey();
  return { props: surveys };
}

export default Survey;
