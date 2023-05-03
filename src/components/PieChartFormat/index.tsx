import { PieChart } from "@/components";

export interface formatItem {
  format: string;
  count: number;
}

interface PieChartFormatProps {
  formats: formatItem[];
}

export const PieChartFormat = ({ formats }: PieChartFormatProps) => {
  const formatLabels: string[] = [];
  const formatCounts: number[] = [];

  formats.forEach((formatItem: formatItem) => {
    formatLabels.push(formatItem.format);
    formatCounts.push(formatItem.count);
  });

  return (
    <PieChart
      label="Number of type"
      labelArray={formatLabels}
      dataArray={formatCounts}
    />
  );
};
