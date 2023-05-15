import { PieChart } from "@/components";

import styles from "./styles.module.css";

export interface statusesItem {
  status: string;
  count: number;
}

interface PieChartStatusesProps {
  statuses: statusesItem[];
}

export const PieChartStatuses = ({ statuses }: PieChartStatusesProps) => {
  const statusesLabels: string[] = [];
  const statusesCounts: number[] = [];

  statuses.forEach((statusesItem: statusesItem) => {
    statusesLabels.push(statusesItem.status);
    statusesCounts.push(statusesItem.count);
  });

  return (
    <div className={styles["pie-chart-statuses"]}>
      <h2>Statuses</h2>
      <PieChart
        label="Number of type"
        labelArray={statusesLabels}
        dataArray={statusesCounts}
      />
    </div>
  );
};
