import Head from "next/head";
import { ChangeEvent, FormEvent, useState } from "react";

import {
  NavBar,
  FormInputText,
  PieChartStatuses,
  PieChartFormats,
  PieChartCountries,
  BarChartScores,
  LineChartReleaseYears,
  statusesItem,
  formatsItem,
  countriesItem,
  releaseYearsItem,
  scoresItem,
} from "@/components";

import { userQuery } from "@/utils";

import styles from "@/styles/User.module.css";

export default function User() {
  const [formInputTextValue, setFormInputTextValue] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [userName, setUserName] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const [animeCount, setAnimeCount] = useState<string>("");
  const [animeEpisodesWatched, setAnimeEpisodesWatched] = useState<string>("");
  const [animeMinutesWatched, setAnimeMinutesWatched] = useState<string>("");

  const [animeStatuses, setAnimeStatuses] = useState<statusesItem[]>([]);
  const [animeFormats, setAnimeFormats] = useState<formatsItem[]>([]);
  const [animeCountries, setAnimeCountries] = useState<countriesItem[]>([]);
  const [animeScores, setAnimeScores] = useState<scoresItem[]>([]);
  const [animeReleaseYears, setAnimeReleaseYears] = useState<
    releaseYearsItem[]
  >([]);

  const fetchUser = async (name: string) => {
    const userName = formInputTextValue;

    setFormInputTextValue("");

    setErrorMessage("");

    setUserName("");
    setAvatarUrl("");

    setAnimeCount("");
    setAnimeEpisodesWatched("");
    setAnimeMinutesWatched("");

    setAnimeStatuses([]);
    setAnimeFormats([]);
    setAnimeCountries([]);
    setAnimeScores([]);
    setAnimeReleaseYears([]);

    const url: string = "https://graphql.anilist.co";

    const variables: { name: string } = {
      name: name,
    };

    interface options {
      method: string;
      headers: {
        "Content-Type": string;
        Accept: string;
      };
      body: string;
    }

    const options: options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: userQuery,
        variables: variables,
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (data.data.User !== null) {
        setAvatarUrl(data.data.User.avatar.large);
        setUserName(data.data.User.name);

        setAnimeCount(data.data.User.statistics.anime.count);
        setAnimeEpisodesWatched(
          data.data.User.statistics.anime.episodesWatched
        );
        setAnimeMinutesWatched(data.data.User.statistics.anime.minutesWatched);

        setAnimeStatuses(data.data.User.statistics.anime.statuses);
        setAnimeFormats(data.data.User.statistics.anime.formats);
        setAnimeCountries(data.data.User.statistics.anime.countries);
        setAnimeScores(data.data.User.statistics.anime.scores);
        setAnimeReleaseYears(data.data.User.statistics.anime.releaseYears);
        console.log(data);
      } else {
        setErrorMessage(`There is no user named "${userName}"`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchUser(formInputTextValue);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInputTextValue(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Review Charter - User</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className={styles["user"]}>
        <div className={styles["user__top"]}>
          <FormInputText
            placeHolder="Username..."
            inputValue={formInputTextValue}
            submitHandler={submitHandler}
            changeHandler={changeHandler}
          />
        </div>
        <p>{errorMessage}</p>
        {avatarUrl && (
          <img className={styles["user__avatar"]} src={avatarUrl} />
        )}
        <h1>{userName}</h1>
        {animeCount && <p>Total anime: {animeCount}</p>}
        {animeEpisodesWatched && (
          <p>Episodes watched: {animeEpisodesWatched}</p>
        )}
        {animeMinutesWatched && (
          <p>Days watched: {parseFloat(animeMinutesWatched) / 60 / 24}</p>
        )}
        <div className={styles["user__pie-charts"]}>
          <div className={styles["user__pie-chart"]}>
            {animeStatuses.length > 0 && (
              <>
                <h2>Statuses</h2>
                <PieChartStatuses statuses={animeStatuses} />
              </>
            )}
          </div>
          <div className={styles["user__pie-chart"]}>
            {animeFormats.length > 0 && (
              <>
                <h2>Formats</h2>
                <PieChartFormats formats={animeFormats} />
              </>
            )}
          </div>
          <div className={styles["user__pie-chart"]}>
            {animeCountries.length > 0 && (
              <>
                <h2>Countries</h2>
                <PieChartCountries countries={animeCountries} />
              </>
            )}
          </div>
        </div>
        <div className={styles["user__bar-chart"]}>
          {animeScores.length > 0 && (
            <>
              <h2>Scores</h2>
              <BarChartScores scores={animeScores} />
            </>
          )}
        </div>
        <div className={styles["user__line-chart"]}>
          {animeReleaseYears.length > 0 && (
            <>
              <h2>Release Years</h2>
              <LineChartReleaseYears releaseYears={animeReleaseYears} />
            </>
          )}
        </div>
      </main>
    </>
  );
}
