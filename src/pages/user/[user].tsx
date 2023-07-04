import { useRouter } from "next/router";
import { useEffect } from "react";

import { LoadingIndicator } from "@/components";
import {
  // Functions
  fetchUser,
  // Components
  UserLayout,
  UserInfo,
  UserAnime,
  UserManga,
  UserControls,
} from "@/features/user";

import { useUserContext } from "@/features/user/context/UserContext";

import styles from "@/styles/[user].module.css";

export default function User() {
  const router = useRouter();
  const currentUserContext = useUserContext();

  let user = router.query.user;

  useEffect(() => {
    if (user !== undefined) {
      fetchUser({
        name: user.toString(),
        dispatch: currentUserContext.dispatch,
      });
    }
  }, [user]);

  if (currentUserContext.state.loading) {
    return (
      <UserLayout title={"user"}>
        <UserControls
          state={currentUserContext.state}
          dispatch={currentUserContext.dispatch}
        />
        <div className={styles["user__loading-indicator"]}>
          <LoadingIndicator />
        </div>
      </UserLayout>
    );
  } else if (currentUserContext.state.errorMessage) {
    return (
      <UserLayout title={"user"}>
        <UserControls
          state={currentUserContext.state}
          dispatch={currentUserContext.dispatch}
        />
        <div className={styles["user__error-message"]}>
          {currentUserContext.state.errorMessage}
        </div>
      </UserLayout>
    );
  } else {
    return (
      <UserLayout title={"user"}>
        <UserControls
          state={currentUserContext.state}
          dispatch={currentUserContext.dispatch}
        />
        <UserInfo
          avatarUrl={currentUserContext.state.avatarUrl}
          bannerUrl={currentUserContext.state.bannerUrl}
          userName={currentUserContext.state.userName}
        />
        {currentUserContext.state.mode === "ANIME" &&
          parseFloat(currentUserContext.state.anime.count) > 0 && (
            <UserAnime anime={currentUserContext.state.anime} />
          )}
        {currentUserContext.state.mode === "ANIME" &&
          parseFloat(currentUserContext.state.anime.count) <= 0 && (
            <div className={styles["user__instructions"]}>
              This user does not have any anime to chart.
            </div>
          )}
        {currentUserContext.state.mode === "MANGA" &&
          parseFloat(currentUserContext.state.manga.count) > 0 && (
            <UserManga manga={currentUserContext.state.manga} />
          )}
        {currentUserContext.state.mode === "MANGA" &&
          parseFloat(currentUserContext.state.manga.count) <= 0 && (
            <div className={styles["user__instructions"]}>
              This user does not have any manga to chart.
            </div>
          )}
      </UserLayout>
    );
  }
}
