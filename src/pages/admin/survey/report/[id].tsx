import { getChartData } from '@/api/answer';
import { getAllSurvey, getReportById } from '@/api/survey';
import PieChart from '@/components/survey/chart';
import { ChartData } from '@/types/answer';
import { Box, Center, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { UUID } from 'crypto';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

type ReportDetailProps = {
  report: { report: string };
  chartData: ChartData;
};

// const Chart = dynamic(import('@/components/survey/chart'), { ssr: false });

const ReportDetail = ({ report, chartData }: ReportDetailProps) => {
  let text: React.ReactNode;
  if (report.report === undefined) {
    text = (
      <Center>
        <Text>No answer recorded</Text>
      </Center>
    );
  }
  text = (
    <Text style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
      {report.report}
    </Text>
  );

  const data = chartData.answers.map(qs => {
    return {
      title: qs.question.title,
      data: qs.scores.map(s => ({ id: s.score, value: s.count })),
    };
  });

  const chart = data.map(d => (
    <Box key={d.title}>
      <PieChart data={d.data} question={d.title} />
    </Box>
  ));

  return (
    <>
      <Stack>
        <Center>
          <Title order={3}>Rangkuman hasil kuesioner</Title>
        </Center>
        {text}
        <Center>
          <Title order={3}>Grafik hasil kuesioner</Title>
        </Center>
        <SimpleGrid cols={2}>{chart}</SimpleGrid>
      </Stack>
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  id: UUID;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params as IParams;
  const report = await getReportById(id);
  const chartData = await getChartData(id);
  return {
    props: { report, chartData },
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
