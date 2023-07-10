import { MouseEvent } from "react";

import { SvgButton } from "@/components";

import SvgEraser from "public/assets/eraser-line.svg";

import styles from "./styles.module.css";

interface EraserButton {
  clickHandler: (event: MouseEvent) => void;
}

export const EraserButton = ({ clickHandler }: EraserButton) => {
  return (
    <button className={styles["eraser-button"]} onClick={clickHandler}>
      <SvgButton svg={<SvgEraser />} />
    </button>
  );
};
