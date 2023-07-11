import { userQuery } from "@/features/user";

interface fetchUser {
  name: string;
}

export const fetchUser = async ({ name }: fetchUser) => {
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
      const { User } = data.data;

      const anime = {
        count: User.statistics.anime.count,
        episodesWatched: User.statistics.anime.episodesWatched,
        daysWatched: Math.round(
          parseFloat(User.statistics.anime.minutesWatched) / 60 / 24
        ).toString(),
        statuses: User.statistics.anime.statuses,
        formats: User.statistics.anime.formats,
        scores: User.statistics.anime.scores,
        countries: User.statistics.anime.countries,
        releaseYears: User.statistics.anime.releaseYears,
      };

      const manga = {
        count: User.statistics.manga.count,
        chaptersRead: User.statistics.manga.chaptersRead,
        volumesRead: User.statistics.manga.volumesRead,
        statuses: User.statistics.manga.statuses,
        formats: User.statistics.manga.formats,
        scores: User.statistics.manga.scores,
        countries: User.statistics.manga.countries,
        releaseYears: User.statistics.manga.releaseYears,
      };

      const user = {
        avatarUrl: User.avatar.large,
        bannerUrl: User.bannerImage,
        userName: User.name,
        anime,
        manga,
      };

      return user;
    } else {
      throw new Error(`There is no user named "${name}".`);
    }
  } catch (e) {
    const error = e as Error;
    throw new Error(error.message);
  }
};
