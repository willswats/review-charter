import { LoadingIndicator } from "@/components";
import { UserInfo, UserAnime, UserManga } from "@/features/user";
import { State } from "@/pages/user";

import styles from "./styles.module.css";

interface UserContentProps {
  state: State;
}

export const UserContent = ({ state }: UserContentProps) => {
  if (state.errorMessage) {
    return (
      <div className={styles["user-content__error-message"]}>
        {state.errorMessage}
      </div>
    );
  } else if (state.loading) {
    return (
      <div className={styles["user-content__loading-indicator"]}>
        <LoadingIndicator />
      </div>
    );
  } else if (!state.userName) {
    return (
      <div className={styles["user-content__instructions"]}>
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
          <div className={styles["user-content__instructions"]}>
            This user does not have any anime to chart.
          </div>
        )}
        {state.mode === "MANGA" && parseFloat(state.manga.count) > 0 && (
          <UserManga manga={state.manga} />
        )}
        {state.mode === "MANGA" && parseFloat(state.manga.count) <= 0 && (
          <div className={styles["user-content__instructions"]}>
            This user does not have any manga to chart.
          </div>
        )}
      </>
    );
  }
};
