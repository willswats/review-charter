import { JSX, MouseEvent } from "react";

import styles from "./styles.module.css";

interface ButtonSvgProps {
  svg: JSX.Element;
  clickHandler?: (event: MouseEvent) => void;
}

export const ButtonSvg = ({ svg, clickHandler }: ButtonSvgProps) => {
  return (
    <button onClick={clickHandler} className={styles["svg-button"]}>
      {svg}
    </button>
  );
};
