import Image from "next/image";

import { SvgLink } from "@/components/SvgLink";
import { useUserContext } from "@/features/user";

import SvgLinkRound from "public/assets/link-round.svg";

import styles from "./styles.module.css";

export const UserInfo = () => {
  const { state } = useUserContext();
  const { bannerUrl, avatarUrl, userName } = state.user;

  return (
    <div className={styles["user-info"]}>
      {bannerUrl !== null && (
        <Image
          className={styles["user-info__banner"]}
          src={bannerUrl}
          alt="Banner"
          width={2000}
          height={2000}
        />
      )}
      <div className={styles["user-info__content"]}>
        <span className={styles["user-info__link"]}>
          <SvgLink
            svg={<SvgLinkRound />}
            href={`https://anilist.co/user/${userName}`}
          />
        </span>
        {avatarUrl.length > 0 && (
          <Image
            className={styles["user-info__avatar"]}
            src={avatarUrl}
            alt="Avatar"
            width={150}
            height={150}
          />
        )}
        <h1 className={styles["user-info__username"]}>{userName}</h1>
      </div>
    </div>
  );
};
