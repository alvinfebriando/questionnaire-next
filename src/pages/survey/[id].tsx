import { getAllSurvey, getSurveyById } from '@/api/survey';
import { Survey } from '@/types/survey';
import { UUID } from 'crypto';
import { GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import { ParsedUrlQuery } from 'querystring';

type SurveyDetailProps = Survey;

const SurveyForm = dynamic(
  () => import('../../components/survey/answerSurveyForm'),
  { ssr: false }
);

const SurveyDetail = (survey: SurveyDetailProps) => {
  return <SurveyForm survey={survey} />;
};

interface IParams extends ParsedUrlQuery {
  id: UUID;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params as IParams;
  const survey = await getSurveyById(id);
  return { props: survey };
}

export async function getStaticPaths() {
  const surveys = await getAllSurvey();
  const paths = surveys.surveys.map(s => ({
    params: { id: s.id },
  }));
  return { paths, fallback: false };
}

export default SurveyDetail;
