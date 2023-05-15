import styles from "./styles.module.css";

interface ModeButtonProps {
  text: string;
  buttonMode: string;
  mode: string;
  clickHandler: () => void;
}

export const ModeButton = ({
  text,
  buttonMode,
  mode,
  clickHandler,
}: ModeButtonProps) => {
  return (
    <button
      className={`${styles["mode-button"]} ${
        mode === buttonMode ? styles["mode-button--active"] : ""
      }`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};
