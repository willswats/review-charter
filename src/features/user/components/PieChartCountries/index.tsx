import { PieChart } from "@/components";

import styles from "./styles.module.css";

export interface countriesItem {
  country: string;
  count: number;
}

interface PieChartCountriesProps {
  countries: countriesItem[];
}

export const PieChartCountries = ({ countries }: PieChartCountriesProps) => {
  const labelArray: string[] = [];
  const dataArray: number[] = [];

  countries.forEach((countriesItem: countriesItem) => {
    labelArray.push(countriesItem.country);
    dataArray.push(countriesItem.count);
  });

  return (
    <div className={styles["pie-chart-countries"]}>
      <h2>Countries</h2>
      <PieChart
        label="Number of type:"
        labelArray={labelArray}
        dataArray={dataArray}
      />
    </div>
  );
};
