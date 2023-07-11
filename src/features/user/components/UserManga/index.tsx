import { Statistic } from "@/components";
import {
  PieChartStatuses,
  PieChartFormats,
  PieChartCountries,
  BarChartScores,
  LineChartReleaseYears,
  useUserContext,
} from "@/features/user";

import styles from "./styles.module.css";

import SvgBookClosed from "public/assets/book-closed.svg";
import SvgBookmark from "public/assets/bookmark.svg";
import SvgBookOpen from "public/assets/book-open.svg";

export const UserManga = () => {
  const { state } = useUserContext();
  const { manga } = state.user;

  return (
    <>
      <div className={styles["user-manga__statistics"]}>
        {parseFloat(manga.count) >= 0 && (
          <Statistic
            statistic={manga.count}
            text="Total Manga"
            svg={<SvgBookClosed />}
          />
        )}
        {parseFloat(manga.chaptersRead) >= 0 && (
          <Statistic
            statistic={manga.chaptersRead}
            text="Chapters Read"
            svg={<SvgBookmark />}
          />
        )}
        {parseFloat(manga.volumesRead) >= 0 && (
          <Statistic
            statistic={manga.volumesRead}
            text="Volumes Read"
            svg={<SvgBookOpen />}
          />
        )}
      </div>
      <div className={styles["user-manga__pie-charts"]}>
        {manga.statuses.length > 0 && (
          <PieChartStatuses label="Number of manga" statuses={manga.statuses} />
        )}
        {manga.formats.length > 0 && (
          <PieChartFormats label="Number of manga" formats={manga.formats} />
        )}
        {manga.countries.length > 0 && (
          <PieChartCountries
            label="Number of manga"
            countries={manga.countries}
          />
        )}
      </div>
      {manga.scores.length > 0 && (
        <BarChartScores label="Number of scores" scores={manga.scores} />
      )}
      {manga.releaseYears.length > 0 && (
        <LineChartReleaseYears
          label="Number of manga"
          releaseYears={manga.releaseYears}
        />
      )}
    </>
  );
};
