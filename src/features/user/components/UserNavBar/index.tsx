import { useUserContext } from "@/features/user";
import { NavBarLink } from "@/components/NavBarLink";

import styles from "./styles.module.css";

export const NavBar = () => {
  const userContext = useUserContext();

  return (
    <nav className={styles["nav-bar"]}>
      <NavBarLink url="/" text="Home" />
      <NavBarLink url={`/user/${userContext.state.userName}`} text="User" />
    </nav>
  );
};
