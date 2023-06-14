import { SvgLink } from "@/components/SvgLink";

import SvgLinkRound from "public/assets/link-round.svg";

import styles from "./styles.module.css";

interface UserInfo {
  avatarUrl: string;
  userName: string;
}

export const UserInfo = ({ avatarUrl, userName }: UserInfo) => {
  return (
    <div className={styles["user-info"]}>
      <span className={styles["user-info__link"]}>
        <SvgLink
          svg={<SvgLinkRound />}
          href={`https://anilist.co/user/${userName}`}
        />
      </span>
      <img className={styles["user-info__avatar"]} src={avatarUrl} />
      <h1>{userName} </h1>
    </div>
  );
};
