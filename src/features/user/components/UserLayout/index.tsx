import { ReactNode } from "react";
import Head from "next/head";

import { NavBar, useUserContext } from "@/features/user";

import styles from "./styles.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const UserLayout = ({ children }: LayoutProps) => {
  const userContext = useUserContext();

  let titleStart = "User";

  if (userContext.state.loading == true) {
    titleStart = "Loading...";
  } else if (userContext.state.userName.length > 0) {
    titleStart = `${userContext.state.userName}'s Stats`;
  }

  return (
    <>
      <Head>
        <title>{titleStart} - Review Charter</title>
      </Head>
      <NavBar />
      <main className={styles["layout"]}>{children}</main>
    </>
  );
};
