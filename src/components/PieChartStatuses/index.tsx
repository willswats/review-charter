import { PieChart } from "@/components";

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
    <PieChart
      label="Number of type"
      labelArray={statusesLabels}
      dataArray={statusesCounts}
    />
  );
};
