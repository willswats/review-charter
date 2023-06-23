import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";

import { LoadingIndicator } from "@/components";
import {
  // Interfaces
  initialState,
  // Functions
  reducer,
  fetchUser,
  // Components
  UserLayout,
  UserInfo,
  UserAnime,
  UserManga,
  UserControls,
} from "@/features/user";

import styles from "@/styles/[user].module.css";

export default function User() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  let user = router.query.user;

  useEffect(() => {
    if (user !== undefined) {
      fetchUser({ name: user.toString(), dispatch });
    }
  }, [user]);

  if (state.loading) {
    return (
      <UserLayout title={"user"}>
        <UserControls state={state} dispatch={dispatch} />
        <div className={styles["user__loading-indicator"]}>
          <LoadingIndicator />
        </div>
      </UserLayout>
    );
  } else if (state.errorMessage) {
    return (
      <UserLayout title={"user"}>
        <UserControls state={state} dispatch={dispatch} />
        <div className={styles["user__error-message"]}>
          {state.errorMessage}
        </div>
      </UserLayout>
    );
  } else {
    return (
      <UserLayout title={"user"}>
        <UserControls state={state} dispatch={dispatch} />
        <UserInfo
          avatarUrl={state.avatarUrl}
          bannerUrl={state.bannerUrl}
          userName={state.userName}
        />
        {state.mode === "ANIME" && parseFloat(state.anime.count) > 0 && (
          <UserAnime anime={state.anime} />
        )}
        {state.mode === "ANIME" && parseFloat(state.anime.count) <= 0 && (
          <div className={styles["user__instructions"]}>
            This user does not have any anime to chart.
          </div>
        )}
        {state.mode === "MANGA" && parseFloat(state.manga.count) > 0 && (
          <UserManga manga={state.manga} />
        )}
        {state.mode === "MANGA" && parseFloat(state.manga.count) <= 0 && (
          <div className={styles["user__instructions"]}>
            This user does not have any manga to chart.
          </div>
        )}
      </UserLayout>
    );
  }
}
