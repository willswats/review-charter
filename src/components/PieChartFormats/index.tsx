import { PieChart } from "@/components";

export interface formatsItem {
  format: string;
  count: number;
}

interface PieChartFormatsProps {
  formats: formatsItem[];
}

export const PieChartFormats = ({ formats }: PieChartFormatsProps) => {
  const formatsLabels: string[] = [];
  const formatsCounts: number[] = [];

  formats.forEach((formatsItem: formatsItem) => {
    formatsLabels.push(formatsItem.format);
    formatsCounts.push(formatsItem.count);
  });

  return (
    <div>
      <h2>Formats</h2>
      <PieChart
        label="Number of type"
        labelArray={formatsLabels}
        dataArray={formatsCounts}
      />
    </div>
  );
};
