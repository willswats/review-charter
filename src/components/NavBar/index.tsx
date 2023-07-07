import { NavBarLink } from "@/components/NavBarLink";

import styles from "./styles.module.css";

interface NavBarProps {
  userName: string;
}

export const NavBar = ({ userName }: NavBarProps) => {
  return (
    <nav className={styles["nav-bar"]}>
      <NavBarLink href="/" urlFirstWord="" text="Home" />
      <NavBarLink href={`/user/${userName}`} urlFirstWord="user" text="User" />
    </nav>
  );
};
