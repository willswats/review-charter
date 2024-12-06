import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import styles from "./styles.module.css";

interface LineChartProps {
  label: string;
  labelArray: string[];
  dataArray: number[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const LineChart = ({ label, labelArray, dataArray }: LineChartProps) => {
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
      line: {
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
    <div className={styles["line-chart"]}>
      <Line data={data} options={options} />
    </div>
  );
};
