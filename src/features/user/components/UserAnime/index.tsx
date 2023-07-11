import { Statistic } from "@/components";
import {
  PieChartStatuses,
  PieChartFormats,
  PieChartCountries,
  BarChartScores,
  LineChartReleaseYears,
  useUserContext,
} from "@/features/user";

import SvgTv from "public/assets/tv.svg";
import SvgPlay from "public/assets/play-circle.svg";
import SvgCalendar from "public/assets/calendar-line.svg";

import styles from "./styles.module.css";

export const UserAnime = () => {
  const { state } = useUserContext();
  const { anime } = state.user;

  return (
    <>
      <div className={styles["user-anime__statistics"]}>
        {parseFloat(anime.count) >= 0 && (
          <Statistic
            statistic={anime.count}
            text="Total Anime"
            svg={<SvgTv />}
          />
        )}
        {parseFloat(anime.episodesWatched) >= 0 && (
          <Statistic
            statistic={anime.episodesWatched}
            text="Episodes Watched"
            svg={<SvgPlay />}
          />
        )}
        {parseFloat(anime.daysWatched) >= 0 && (
          <Statistic
            statistic={anime.daysWatched}
            text="Days Watched"
            svg={<SvgCalendar />}
          />
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
