import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

interface NavBarLinkProps {
  href: string;
  urlFirstWord: string;
  text: string;
}

export const NavBarLink = ({ href, urlFirstWord, text }: NavBarLinkProps) => {
  const { asPath } = useRouter();
  const asPathFirstWord = asPath.split("/")[1];

  return (
    <Link
      className={`${styles["nav-bar-link"]}
          ${asPathFirstWord === urlFirstWord
          ? styles["nav-bar-link--active"]
          : ""
        }`}
      href={href}
    >
      {text}
    </Link>
  );
};
