import SvgLinkRound from "public/assets/link-round.svg";

import styles from "./styles.module.css";

interface UserInfo {
  avatarUrl: string;
  userName: string;
}

export const UserInfo = ({ avatarUrl, userName }: UserInfo) => {
  return (
    <div className={styles["user-info"]}>
      <a
        className={styles["user-info__link"]}
        href={`https://anilist.co/user/${userName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgLinkRound />
      </a>
      <img className={styles["user-info__avatar"]} src={avatarUrl} />
      <h1>{userName} </h1>
    </div>
  );
};
