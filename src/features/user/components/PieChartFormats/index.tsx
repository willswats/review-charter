import { PieChart } from "@/components";

import styles from "./styles.module.css";

export interface formatsItem {
  format: string;
  count: number;
}

interface PieChartFormatsProps {
  label: string;
  formats: formatsItem[];
}

export const PieChartFormats = ({ label, formats }: PieChartFormatsProps) => {
  const formatsLabels: string[] = [];
  const formatsCounts: number[] = [];

  formats.forEach((formatsItem: formatsItem) => {
    formatsLabels.push(formatsItem.format);
    formatsCounts.push(formatsItem.count);
  });

  return (
    <div className={styles["pie-chart-formats"]}>
      <h2>Formats</h2>
      <PieChart
        label={label}
        labelArray={formatsLabels}
        dataArray={formatsCounts}
      />
    </div>
  );
};
