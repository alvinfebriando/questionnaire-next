import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(...registerables);

type ChartProps = {
  data: { value: number; id: number }[];
  question: string;
};

const PieChart = ({ data, question }: ChartProps) => {
  const d = {
    labels: data.map(d => d.id),
    datasets: [
      {
        label: '# of votes',
        data: data.map(d => d.value),
        backgroundColor: [
          `rgba(255, 99, 132, 0.8)`,
          `rgba(54, 162, 235, 0.8)`,
          `rgba(255, 205, 86, 0.8)`,
          `rgba(75, 192, 192, 0.8)`,
          `rgba(153, 102, 255, 0.8)`,
        ],
      },
    ],
  };
  return (
    <Doughnut
      data={d}
      options={{
        plugins: {
          title: {
            display: true,
            text: question,
            padding: 10,
          },
        },
      }}
    />
  );
};

export default PieChart;
