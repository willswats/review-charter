import Head from "next/head";
import { ChangeEvent, FormEvent, useState, useReducer } from "react";

import { NavBar, Search } from "@/components";

import {
  //Components
  UserModeButtons,
  UserContent,
  // Interfaces
  statusesItem,
  formatsItem,
  countriesItem,
  releaseYearsItem,
  scoresItem,
  // Utils
  userQuery,
} from "@/features/user";

import styles from "@/styles/User.module.css";

export interface Anime {
  count: string;
  episodesWatched: string;
  daysWatched: string;
  statuses: statusesItem[];
  formats: formatsItem[];
  countries: countriesItem[];
  scores: scoresItem[];
  releaseYears: releaseYearsItem[];
}

export interface Manga {
  count: string;
  chaptersRead: string;
  volumesRead: string;
  statuses: statusesItem[];
  formats: formatsItem[];
  countries: countriesItem[];
  scores: scoresItem[];
  releaseYears: releaseYearsItem[];
}

export interface State {
  avatarUrl: string;
  userName: string;
  anime: Anime;
  manga: Manga;
  mode: string;
  loading: boolean;
  errorMessage: string;
}

const initialState: State = {
  avatarUrl: "",
  userName: "",
  anime: {
    count: "",
    episodesWatched: "",
    daysWatched: "",
    statuses: [],
    formats: [],
    scores: [],
    countries: [],
    releaseYears: [],
  },
  manga: {
    count: "",
    chaptersRead: "",
    volumesRead: "",
    statuses: [],
    formats: [],
    scores: [],
    countries: [],
    releaseYears: [],
  },
  mode: "ANIME",
  loading: false,
  errorMessage: "",
};

export type SetAvatarUrl = { type: "set-avatar-url"; payload: string };
export type SetUserName = { type: "set-user-name"; payload: string };
export type SetAnime = { type: "set-anime"; payload: Anime };
export type SetManga = { type: "set-manga"; payload: Manga };
export type SetMode = { type: "set-mode"; payload: string };
export type SetLoading = { type: "set-loading"; payload: boolean };
export type SetErrorMessage = { type: "set-error-message"; payload: string };

type UserActions =
  | SetAvatarUrl
  | SetUserName
  | SetAnime
  | SetManga
  | SetMode
  | SetLoading
  | SetErrorMessage;

const reducer = (state: State, { type, payload }: UserActions): State => {
  switch (type) {
    case "set-avatar-url":
      return {
        ...state,
        avatarUrl: payload,
      };
    case "set-user-name":
      return {
        ...state,
        userName: payload,
      };
    case "set-anime":
      return {
        ...state,
        anime: payload,
      };
    case "set-manga":
      return {
        ...state,
        manga: payload,
      };
    case "set-mode":
      return {
        ...state,
        mode: payload,
      };
    case "set-loading":
      return {
        ...state,
        loading: payload,
      };
    case "set-error-message":
      return {
        ...state,
        errorMessage: payload,
      };
  }
};

export default function User() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formInputTextValue, setSearchValue] = useState<string>("");

  const fetchUser = async (name: string) => {
    const userName = formInputTextValue;
    setSearchValue("");

    dispatch({ type: "set-avatar-url", payload: initialState.avatarUrl });
    dispatch({ type: "set-user-name", payload: initialState.userName });
    dispatch({ type: "set-anime", payload: initialState.anime });
    dispatch({ type: "set-loading", payload: initialState.loading });
    dispatch({
      type: "set-error-message",
      payload: initialState.errorMessage,
    });

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
      dispatch({ type: "set-loading", payload: true });

      const response = await fetch(url, options);
      const data = await response.json();

      if (data.data.User !== null) {
        const avatarUrl = data.data.User.avatar.large;
        const userName = data.data.User.name;

        const anime = {
          count: data.data.User.statistics.anime.count,
          episodesWatched: data.data.User.statistics.anime.episodesWatched,
          daysWatched: Math.round(
            parseFloat(data.data.User.statistics.anime.minutesWatched) / 60 / 24
          ).toString(),
          statuses: data.data.User.statistics.anime.statuses,
          formats: data.data.User.statistics.anime.formats,
          scores: data.data.User.statistics.anime.scores,
          countries: data.data.User.statistics.anime.countries,
          releaseYears: data.data.User.statistics.anime.releaseYears,
        };

        const manga = {
          count: data.data.User.statistics.manga.count,
          chaptersRead: data.data.User.statistics.manga.chaptersRead,
          volumesRead: data.data.User.statistics.manga.volumesRead,
          statuses: data.data.User.statistics.manga.statuses,
          formats: data.data.User.statistics.manga.formats,
          scores: data.data.User.statistics.manga.scores,
          countries: data.data.User.statistics.manga.countries,
          releaseYears: data.data.User.statistics.manga.releaseYears,
        };

        dispatch({ type: "set-loading", payload: false });

        dispatch({ type: "set-avatar-url", payload: avatarUrl });
        dispatch({ type: "set-user-name", payload: userName });
        dispatch({ type: "set-anime", payload: anime });
        dispatch({ type: "set-manga", payload: manga });

        console.log(data);
      } else {
        dispatch({ type: "set-loading", payload: false });

        const errorMessage = `There is no user named "${userName}".`;
        dispatch({ type: "set-error-message", payload: errorMessage });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formInputTextValue !== "") {
      fetchUser(formInputTextValue);
    }
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Review Charter - User</title>
      </Head>

      <NavBar />
      <main className={styles["user"]}>
        <div className={styles["user__controls"]}>
          <div className={styles["user__controls-left"]}></div>
          <div className={styles["user__controls-middle"]}>
            <Search
              placeHolder="Username..."
              inputValue={formInputTextValue}
              submitHandler={submitHandler}
              changeHandler={changeHandler}
            />
          </div>
          <div className={styles["user__controls-right"]}>
            <UserModeButtons mode={state.mode} dispatch={dispatch} />
          </div>
        </div>
        <UserContent state={state} />
      </main>
    </>
  );
}
