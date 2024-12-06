import Image from "next/image";

import { LinkSvg, SvgLinkRound } from "@/components";
import { useUserContext } from "@/features/user";

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
          width={1700}
          height={330}
          priority={true}
        />
      )}
      <div className={styles["user-info__content"]}>
        <span className={styles["user-info__link"]}>
          <LinkSvg
            svg={<SvgLinkRound />}
            href={`https://anilist.co/user/${userName}`}
          />
        </span>
        {avatarUrl.length > 0 && (
          <Image
            className={styles["user-info__avatar"]}
            src={avatarUrl}
            alt="Avatar"
            width={230}
            height={230}
            priority={true}
          />
        )}
        <h1 className={styles["user-info__username"]}>{userName}</h1>
      </div>
    </div>
  );
};
