import { getAllSurvey, getReportById } from '@/api/survey';
import { UUID } from 'crypto';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Center, Text } from '@mantine/core';

type ReportDetailProps = {
  report: { report: string };
};

const ReportDetail = ({ report }: ReportDetailProps) => {
  if (report.report === undefined) {
    return (
      <Center>
        <Text>No answer recorded</Text>
      </Center>
    );
  }
  return <Text style={{ whiteSpace: 'pre-wrap' }}>{report.report}</Text>;
};

interface IParams extends ParsedUrlQuery {
  id: UUID;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params as IParams;
  const report = await getReportById(id);
  return {
    props: { report },
  };
}

export async function getStaticPaths() {
  const surveys = await getAllSurvey();
  const paths = surveys.surveys.map(s => ({
    params: { id: s.id },
  }));
  return { paths, fallback: true };
}

export default ReportDetail;
