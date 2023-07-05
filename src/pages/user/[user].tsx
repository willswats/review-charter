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
  // Hooks
  useUserContext,
} from "@/features/user";

import styles from "@/styles/[user].module.css";

export default function User() {
  const router = useRouter();
  const userContext = useUserContext();

  let user = router.query.user;

  useEffect(() => {
    if (user !== undefined) {
      fetchUser({
        name: user.toString(),
        dispatch: userContext.dispatch,
      });
      console.log(user);
    }
  }, [user]);

  if (userContext.state.loading) {
    return (
      <UserLayout title={"user"}>
        <UserControls
          state={userContext.state}
          dispatch={userContext.dispatch}
        />
        <div className={styles["user__loading-indicator"]}>
          <LoadingIndicator />
        </div>
      </UserLayout>
    );
  } else if (userContext.state.errorMessage) {
    return (
      <UserLayout title={"user"}>
        <UserControls
          state={userContext.state}
          dispatch={userContext.dispatch}
        />
        <div className={styles["user__error-message"]}>
          {userContext.state.errorMessage}
        </div>
      </UserLayout>
    );
  } else {
    return (
      <UserLayout title={"user"}>
        <UserControls
          state={userContext.state}
          dispatch={userContext.dispatch}
        />
        <UserInfo
          avatarUrl={userContext.state.avatarUrl}
          bannerUrl={userContext.state.bannerUrl}
          userName={userContext.state.userName}
        />
        {userContext.state.mode === "ANIME" &&
          parseFloat(userContext.state.anime.count) > 0 && (
            <UserAnime anime={userContext.state.anime} />
          )}
        {userContext.state.mode === "ANIME" &&
          parseFloat(userContext.state.anime.count) <= 0 && (
            <div className={styles["user__instructions"]}>
              This user does not have any anime to chart.
            </div>
          )}
        {userContext.state.mode === "MANGA" &&
          parseFloat(userContext.state.manga.count) > 0 && (
            <UserManga manga={userContext.state.manga} />
          )}
        {userContext.state.mode === "MANGA" &&
          parseFloat(userContext.state.manga.count) <= 0 && (
            <div className={styles["user__instructions"]}>
              This user does not have any manga to chart.
            </div>
          )}
      </UserLayout>
    );
  }
}
