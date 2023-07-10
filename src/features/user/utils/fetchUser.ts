import { Dispatch } from "react";
import {
  // Interfaces
  initialState,
  // Types
  UserActions,
  // Strings
  userQuery,
} from "@/features/user";

interface fetchUser {
  name: string;
  dispatch: Dispatch<UserActions>;
}

interface resetUser {
  dispatch: Dispatch<UserActions>;
}

export const resetUser = ({ dispatch }: resetUser) => {
  dispatch({ type: "set-avatar-url", payload: initialState.avatarUrl });
  dispatch({ type: "set-banner-url", payload: initialState.bannerUrl });
  dispatch({ type: "set-user-name", payload: initialState.userName });
  dispatch({ type: "set-anime", payload: initialState.anime });
  dispatch({ type: "set-loading", payload: initialState.loading });
  dispatch({
    type: "set-error-message",
    payload: initialState.errorMessage,
  });
};

export const fetchUser = async ({ name, dispatch }: fetchUser) => {
  dispatch({ type: "set-avatar-url", payload: initialState.avatarUrl });
  dispatch({ type: "set-banner-url", payload: initialState.bannerUrl });
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
      const bannerUrl = data.data.User.bannerImage;
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
      dispatch({ type: "set-banner-url", payload: bannerUrl });
      dispatch({ type: "set-user-name", payload: userName });
      dispatch({ type: "set-anime", payload: anime });
      dispatch({ type: "set-manga", payload: manga });
      console.log(data);
    } else {
      dispatch({ type: "set-loading", payload: false });

      const errorMessage = `There is no user named "${name}".`;
      dispatch({ type: "set-error-message", payload: errorMessage });
    }
  } catch (e) {
    console.log(e);
  }
};
