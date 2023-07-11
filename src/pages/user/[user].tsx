import { useRouter } from "next/router";
import { useEffect } from "react";

import { LoadingIndicator } from "@/components";
import {
  UserLayout,
  UserInfo,
  UserAnime,
  UserManga,
  setUserData,
  useUserContext,
} from "@/features/user";

import styles from "@/styles/[user].module.css";

export default function User() {
  const router = useRouter();
  const { state, dispatch } = useUserContext();
  const { mode, loading, errorMessage } = state;
  const { userName, anime, manga } = state.user;

  let userUrl = router.query.user;

  useEffect(() => {
    if (
      userUrl !== undefined &&
      userName.toLowerCase() !== userUrl.toString().toLowerCase()
    ) {
      setUserData({ name: userUrl.toString(), dispatch });
    }
  }, [userName, userUrl, dispatch]);

  if (loading) {
    return (
      <UserLayout>
        <div className={styles["user__loading-indicator"]}>
          <LoadingIndicator />
        </div>
      </UserLayout>
    );
  } else if (errorMessage) {
    return (
      <UserLayout>
        <div className={styles["user__error-message"]}>{errorMessage}</div>
      </UserLayout>
    );
  } else {
    return (
      <UserLayout>
        <UserInfo />
        {mode === "ANIME" && parseFloat(anime.count) > 0 && <UserAnime />}
        {mode === "ANIME" && parseFloat(anime.count) <= 0 && (
          <div className={styles["user__instructions"]}>
            This user does not have any anime to chart.
          </div>
        )}
        {mode === "MANGA" && parseFloat(manga.count) > 0 && <UserManga />}
        {mode === "MANGA" && parseFloat(manga.count) <= 0 && (
          <div className={styles["user__instructions"]}>
            This user does not have any manga to chart.
          </div>
        )}
      </UserLayout>
    );
  }
}
