import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

interface NavBarLinkProps {
  url: string;
  text: string;
}

export const NavBarLink = ({ url, text }: NavBarLinkProps) => {
  const { asPath } = useRouter();
  return (
    <Link
      className={`${styles["nav-bar-link"]}
          ${asPath === url ? styles["nav-bar-link--active"] : ""}`}
      href={url}
    >
      {text}
    </Link>
  );
};
