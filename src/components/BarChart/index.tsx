import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import styles from "./styles.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface BarChartProps {
  label: string;
  labelArray: string[];
  dataArray: number[];
}

export const BarChart = ({ label, labelArray, dataArray }: BarChartProps) => {
  const data = {
    labels: labelArray,
    datasets: [
      {
        label: label,
        data: dataArray,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onHover: (event: any) => {
          event.native.target.style.cursor = "pointer";
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onLeave: (event: any) => {
          event.native.target.style.cursor = "default";
        },
      },
    },
  };

  return (
    <div className={styles["bar-chart"]}>
      <Bar data={data} options={options} />
    </div>
  );
};
