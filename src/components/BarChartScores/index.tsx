import { BarChart } from "@/components";

export interface scoresItem {
  score: number;
  count: number;
}

interface BarChartScoresProps {
  scores: scoresItem[];
}

export const BarChartScores = ({ scores }: BarChartScoresProps) => {
  const labelArray: string[] = [];
  const dataArray: number[] = [];

  scores.sort((a, b) => a.score - b.score);

  scores.forEach((scoresItem) => {
    labelArray.push(scoresItem.score.toString());
    dataArray.push(scoresItem.count);
  });

  return (
    <BarChart
      label="Number of scores"
      labelArray={labelArray}
      dataArray={dataArray}
    />
  );
};
