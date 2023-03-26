import { AllSurveyResponse } from '@/api/common';
import { getAllSurvey } from '@/api/survey';

const Survey = (surveys: AllSurveyResponse) => {
  const surveyItems = surveys.surveys.map(s => (
    <div key={s.id}>{s.subject}</div>
  ));

  return <h3>{surveyItems}</h3>;
};

export async function getStaticProps() {
  const surveys = await getAllSurvey();
  return { props: surveys };
}

export default Survey;
