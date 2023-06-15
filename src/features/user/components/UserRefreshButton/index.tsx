import { MouseEvent } from "react";

import { SvgButton } from "@/components";

import styles from "./styles.module.css";

import SvgRefresh from "public/assets/refresh.svg";

interface UserRefreshButtonProps {
  clickHandler: (event: MouseEvent) => void;
}

export const UserRefreshButton = ({ clickHandler }: UserRefreshButtonProps) => {
  return (
    <span className={styles["user-refresh-button"]}>
      <SvgButton svg={<SvgRefresh />} clickHandler={clickHandler} />
    </span>
  );
};
