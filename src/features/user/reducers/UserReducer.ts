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

export interface State {
  avatarUrl: string;
  bannerUrl: string;
  userName: string;
  anime: Anime;
  manga: Manga;
  mode: string;
  loading: boolean;
  errorMessage: string;
}

export const initialState: State = {
  avatarUrl: "",
  bannerUrl: "",
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
export type SetBannerUrl = { type: "set-banner-url"; payload: string };
export type SetUserName = { type: "set-user-name"; payload: string };
export type SetAnime = { type: "set-anime"; payload: Anime };
export type SetManga = { type: "set-manga"; payload: Manga };
export type SetMode = { type: "set-mode"; payload: string };
export type SetLoading = { type: "set-loading"; payload: boolean };
export type SetErrorMessage = { type: "set-error-message"; payload: string };

export type UserActions =
  | SetAvatarUrl
  | SetBannerUrl
  | SetUserName
  | SetAnime
  | SetManga
  | SetMode
  | SetLoading
  | SetErrorMessage;

export const reducer = (
  state: State,
  { type, payload }: UserActions
): State => {
  switch (type) {
    case "set-avatar-url":
      return {
        ...state,
        avatarUrl: payload,
      };
    case "set-banner-url":
      return {
        ...state,
        bannerUrl: payload,
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
