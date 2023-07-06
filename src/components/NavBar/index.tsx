import { NavBarLink } from "@/components/NavBarLink";

import styles from "./styles.module.css";

interface NavBarProps {
  userName: string;
}

export const NavBar = ({ userName }: NavBarProps) => {
  return (
    <nav className={styles["nav-bar"]}>
      <NavBarLink url="/" text="Home" />
      <NavBarLink url={`/user/${userName}`} text="User" />
    </nav>
  );
};
