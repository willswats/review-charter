import { LineChart } from "@/components";

import styles from "./styles.module.css";

export interface releaseYearsItem {
  releaseYear: string;
  count: number;
}

interface LineChartReleaseYearsProps {
  label: string;
  releaseYears: releaseYearsItem[];
}

export const LineChartReleaseYears = ({
  label,
  releaseYears,
}: LineChartReleaseYearsProps) => {
  const labelArray: string[] = [];
  const dataArray: number[] = [];

  releaseYears.sort(
    (a, b) => parseFloat(a.releaseYear) - parseFloat(b.releaseYear)
  );

  releaseYears.forEach((releaseYearsItem: releaseYearsItem) => {
    labelArray.push(releaseYearsItem.releaseYear);
    dataArray.push(releaseYearsItem.count);
  });

  return (
    <div className={styles["line-chart-release-years"]}>
      <h2>Release Years</h2>
      <LineChart label={label} labelArray={labelArray} dataArray={dataArray} />
    </div>
  );
};
