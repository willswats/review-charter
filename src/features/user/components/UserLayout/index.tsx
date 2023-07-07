import { ReactNode } from "react";
import Head from "next/head";

import { NavBar } from "@/components";
import { useUserContext } from "@/features/user";

import styles from "./styles.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const UserLayout = ({ children }: LayoutProps) => {
  const { state } = useUserContext();
  const { loading, userName } = state;

  let titleStart = "User";
  const titleEnd = "- Review Charter";

  if (loading == true) {
    titleStart = "Loading...";
  } else if (userName.length > 0) {
    titleStart = `${userName}'s Stats`;
  }

  let title = `${titleStart} ${titleEnd}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar userName={userName} />
      <main className={styles["layout"]}>{children}</main>
    </>
  );
};
