import { PieChart } from "@/components";

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
    <PieChart
      label="Number of type:"
      labelArray={labelArray}
      dataArray={dataArray}
    />
  );
};
