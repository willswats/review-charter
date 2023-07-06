import { ModeButton } from "@/components";
import { useUserContext } from "@/features/user";

import styles from "./styles.module.css";

export const UserModeButtons = () => {
  const { state, dispatch } = useUserContext();
  const { mode } = state;

  return (
    <div className={styles["user-mode-buttons"]}>
      <div className={styles["user-mode-buttons__content"]}>
        <ModeButton
          text="Anime"
          mode={mode}
          buttonMode="ANIME"
          clickHandler={() => dispatch({ type: "set-mode", payload: "ANIME" })}
        />
        <ModeButton
          text="Manga"
          mode={mode}
          buttonMode="MANGA"
          clickHandler={() => dispatch({ type: "set-mode", payload: "MANGA" })}
        />
      </div>
    </div>
  );
};
