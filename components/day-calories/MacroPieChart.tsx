import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  protein: number
  fat: number
  carbs: number
}

export const MacroPieChart = ({ protein, fat, carbs }: Props) => {
  const macroChartData = {
    labels: ['Белки', 'Жиры', 'Углеводы'],
    datasets: [
      {
        label: 'БЖУ (г)',
        data: [protein, fat, carbs],
        backgroundColor: ['#3b82f6', '#f59e0b', '#10b981'],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="">
      <Pie data={macroChartData} />
    </div>
  )
}