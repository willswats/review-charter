import { Dispatch } from "react";
import { ModeButton } from "@/components";
import { SetMode } from "@/pages/user";

interface UserModesProps {
  mode: string;
  dispatch: Dispatch<SetMode>;
}

export const UserModes = ({ mode, dispatch }: UserModesProps) => {
  return (
    <div>
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
  );
};
