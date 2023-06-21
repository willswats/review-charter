import { useRouter } from "next/router";
import { LoadingIndicator } from "@/components";
import { Dispatch, useEffect, useReducer } from "react";
import {
  UserInfo,
  UserAnime,
  UserManga,
  State,
  UserActions,
  fetchUser,
  reducer,
  initialState,
} from "@/features/user";

import styles from "@/styles/[user].module.css";

interface UserProps {
  state: State;
  dispatch: Dispatch<UserActions>;
}

export default function User() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const router = useRouter();
  let user = router.query.user;

  useEffect(() => {
    if (user !== undefined) {
      fetchUser({ name: user.toString(), dispatch });
    }
  }, [user]);

  if (state.errorMessage) {
    return (
      <div className={styles["user__error-message"]}>{state.errorMessage}</div>
    );
  } else if (state.loading) {
    return (
      <div className={styles["user__loading-indicator"]}>
        <LoadingIndicator />
      </div>
    );
  } else if (!state.userName) {
    return (
      <div className={styles["user__instructions"]}>
        Enter a username into the input to chart a user.
      </div>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
}
