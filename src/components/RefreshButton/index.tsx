import { MouseEvent } from "react";
import { SvgButton } from "@/components";

import styles from "./styles.module.css";

import SvgRefresh from "public/assets/refresh.svg";

interface RefreshButtonProps {
  clickHandler: (event: MouseEvent) => void;
}

export const RefreshButton = ({ clickHandler }: RefreshButtonProps) => {
  return (
    <span className={styles["refresh-button"]} onClick={clickHandler}>
      <SvgButton svg={<SvgRefresh />} />
    </span>
  );
};
