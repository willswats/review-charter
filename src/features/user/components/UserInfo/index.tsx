import { SvgLink } from "@/components/SvgLink";
import { useUserContext } from "@/features/user";

import SvgLinkRound from "public/assets/link-round.svg";

import styles from "./styles.module.css";

export const UserInfo = () => {
  const { state } = useUserContext();
  const { bannerUrl, avatarUrl, userName } = state;

  return (
    <div className={styles["user-info"]}>
      {bannerUrl !== null && (
        <img className={styles["user-info__banner"]} src={bannerUrl} />
      )}
      <div className={styles["user-info__content"]}>
        <span className={styles["user-info__link"]}>
          <SvgLink
            svg={<SvgLinkRound />}
            href={`https://anilist.co/user/${userName}`}
          />
        </span>
        {avatarUrl.length > 0 && (
          <img className={styles["user-info__avatar"]} src={avatarUrl} />
        )}
        <h1 className={styles["user-info__username"]}>{userName}</h1>
      </div>
    </div>
  );
};
