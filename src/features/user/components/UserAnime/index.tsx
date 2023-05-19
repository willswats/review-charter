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
        {parseFloat(anime.count) >= 0 && (
          <UserStatistic statistic={anime.count} text="Total Anime" />
        )}
        {parseFloat(anime.episodesWatched) >= 0 && (
          <UserStatistic
            statistic={anime.episodesWatched}
            text="Episodes Watched"
          />
        )}
        {parseFloat(anime.daysWatched) >= 0 && (
          <UserStatistic statistic={anime.daysWatched} text="Days Watched" />
        )}
      </div>
      <div className={styles["user-anime__pie-charts"]}>
        {anime.statuses.length > 0 && (
          <PieChartStatuses label="Number of anime" statuses={anime.statuses} />
        )}
        {anime.formats.length > 0 && (
          <PieChartFormats label="Number of anime" formats={anime.formats} />
        )}
        {anime.countries.length > 0 && (
          <PieChartCountries
            label="Number of anime"
            countries={anime.countries}
          />
        )}
      </div>
      {anime.scores.length > 0 && (
        <BarChartScores label="Number of scores" scores={anime.scores} />
      )}
      {anime.releaseYears.length > 0 && (
        <LineChartReleaseYears
          label="Number of anime"
          releaseYears={anime.releaseYears}
        />
      )}
    </>
  );
};
