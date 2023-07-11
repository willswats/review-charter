import {
  statusesItem,
  formatsItem,
  countriesItem,
  releaseYearsItem,
  scoresItem,
} from "@/features/user";

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

export interface User {
  avatarUrl: string;
  bannerUrl: string | null;
  userName: string;
  anime: Anime;
  manga: Manga;
}

export interface State {
  user: User;
  mode: string;
  loading: boolean;
  errorMessage: string;
}

export const initialState: State = {
  user: {
    avatarUrl: "",
    bannerUrl: null,
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
  },
  mode: "ANIME",
  loading: false,
  errorMessage: "",
};

export type SetUser = {
  type: "set-user";
  payload: {
    avatarUrl: string;
    bannerUrl: string | null;
    userName: string;
    anime: Anime;
    manga: Manga;
  };
};
export type SetMode = { type: "set-mode"; payload: string };
export type SetLoading = { type: "set-loading"; payload: boolean };
export type SetErrorMessage = { type: "set-error-message"; payload: string };

export type UserActions = SetUser | SetMode | SetLoading | SetErrorMessage;

export const reducer = (
  state: State,
  { type, payload }: UserActions
): State => {
  switch (type) {
    case "set-user":
      return {
        ...state,
        user: {
          avatarUrl: payload.avatarUrl,
          bannerUrl: payload.bannerUrl,
          userName: payload.userName,
          anime: payload.anime,
          manga: payload.manga,
        },
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
