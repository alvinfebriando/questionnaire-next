import { SurveyTableRecords, Surveys } from '@/types/survey';
import { getAllSurvey } from '@/api/survey';
import SurveyTable from '@/components/survey/surveyTable';

const Survey = (surveys: Surveys) => {
  const data: SurveyTableRecords[] = surveys.surveys.map(s => {
    return {
      ...s,
      lecturerName: `${s.lecturer.title} ${s.lecturer.name}`,
      lecturerId: s.lecturer.id,
      lecturer: '',
    };
  });
  return <SurveyTable survey={data} role='Respondent' />;
};

export async function getStaticProps() {
  const surveys = await getAllSurvey();
  return { props: surveys };
}

export default Survey;
