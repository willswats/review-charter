import { Dispatch } from "react";
import { ModeButton } from "@/components";
import { SetMode } from "@/features/user";

import styles from "./styles.module.css";

interface UserModesProps {
  mode: string;
  dispatch: Dispatch<SetMode>;
}

export const UserModeButtons = ({ mode, dispatch }: UserModesProps) => {
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
