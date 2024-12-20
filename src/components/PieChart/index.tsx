import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import styles from "./styles.module.css";

interface PieChartProps {
  label: string;
  labelArray: string[];
  dataArray: number[];
}

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ label, labelArray, dataArray }: PieChartProps) => {
  const data = {
    labels: labelArray,
    datasets: [
      {
        label: label,
        data: dataArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
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
    <div className={styles["pie-chart"]}>
      <Pie data={data} options={options} />
    </div>
  );
};
