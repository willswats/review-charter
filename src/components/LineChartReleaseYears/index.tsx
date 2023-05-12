import { LineChart } from "@/components";

export interface releaseYearsItem {
  releaseYear: string;
  count: number;
}

interface LineChartReleaseYearsProps {
  releaseYears: releaseYearsItem[];
}

export const LineChartReleaseYears = ({
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
    <div>
      <h2>Release Years</h2>
      <LineChart
        label="Number of type"
        labelArray={labelArray}
        dataArray={dataArray}
      />
    </div>
  );
};
