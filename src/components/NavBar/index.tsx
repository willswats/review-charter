import { NavBarLink } from "@/components/NavBarLink";

import styles from "./styles.module.css";

export const NavBar = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <NavBarLink url="/" text="Home" />
      <NavBarLink url="/user" text="User" />
    </nav>
  );
};
