import { ReactNode } from "react";
import Head from "next/head";

import { NavBar } from "@/components";
import { UserControls, useUserContext } from "@/features/user";

import styles from "./styles.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const UserLayout = ({ children }: LayoutProps) => {
  const { state } = useUserContext();
  const { loading } = state;
  const { userName } = state.user;

  let titleStart = "User";
  const titleEnd = "- Review Charter";

  if (loading == true) {
    titleStart = "Loading...";
  } else if (userName.length > 0) {
    titleStart = `${userName}'s Stats`;
  }

  const title = `${titleStart} ${titleEnd}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar userName={userName} />
      <main className={styles["layout"]}>
        <UserControls />
        {children}
      </main>
    </>
  );
};
