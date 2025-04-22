import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface Props {
  base1RM: number
  percentages: number[]
}

export const OneRepMaxBarChart = ({ percentages, base1RM }: Props) => {
  const chartData = {
    labels: percentages.map((p) => `${p}%`),
    datasets: [
      {
        label: 'Вес (кг)',
        data: percentages.map((p) => Math.round(base1RM * (p / 100))),
        backgroundColor: 'rgba(99, 102, 241, 0.6)', // цвет можно настроить
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: `Нагрузка в зависимости от % 1ПМ (${base1RM} кг)`,
      },
    },
  }

  return (
    <div className='mt-8'>
      <Bar data={chartData} options={chartOptions} />
    </div>
  )
}
