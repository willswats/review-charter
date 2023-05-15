import {
  UserStatistic,
  PieChartStatuses,
  PieChartFormats,
  PieChartCountries,
  BarChartScores,
  LineChartReleaseYears,
} from "@/features/user";
import { Anime } from "@/pages/user";

interface UserAnimeProps {
  anime: Anime;
}

import styles from "./styles.module.css";

export const UserAnime = ({ anime }: UserAnimeProps) => {
  return (
    <>
      <div className={styles["user-anime__statistics"]}>
        {anime.count && (
          <UserStatistic statistic={anime.count} text="Total Anime" />
        )}
        {anime.episodesWatched && (
          <UserStatistic
            statistic={anime.episodesWatched}
            text="Episodes Watched"
          />
        )}
        {anime.daysWatched && (
          <UserStatistic statistic={anime.daysWatched} text="Days Watched" />
        )}
      </div>
      <div className={styles["user-anime__pie-charts"]}>
        {anime.statuses.length > 0 && (
          <PieChartStatuses statuses={anime.statuses} />
        )}
        {anime.formats.length > 0 && (
          <PieChartFormats formats={anime.formats} />
        )}
        {anime.countries.length > 0 && (
          <PieChartCountries countries={anime.countries} />
        )}
      </div>
      {anime.scores.length > 0 && <BarChartScores scores={anime.scores} />}
      {anime.releaseYears.length > 0 && (
        <LineChartReleaseYears releaseYears={anime.releaseYears} />
      )}
    </>
  );
};
