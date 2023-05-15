import { BarChart } from "@/components";

import styles from "./styles.module.css";

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
    <div className={styles["bar-chart-scores"]}>
      <h2>Scores</h2>
      <BarChart
        label="Number of scores"
        labelArray={labelArray}
        dataArray={dataArray}
      />
    </div>
  );
};
