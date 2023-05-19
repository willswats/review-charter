import { PieChart } from "@/components";

import styles from "./styles.module.css";

export interface statusesItem {
  status: string;
  count: number;
}

interface PieChartStatusesProps {
  label: string;
  statuses: statusesItem[];
}

export const PieChartStatuses = ({
  label,
  statuses,
}: PieChartStatusesProps) => {
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
        label={label}
        labelArray={statusesLabels}
        dataArray={statusesCounts}
      />
    </div>
  );
};
