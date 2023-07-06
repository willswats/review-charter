import { ReactNode } from "react";
import Head from "next/head";

import { NavBar } from "@/features/user";

import styles from "./styles.module.css";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export const UserLayout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Review Charter - {title}</title>
      </Head>
      <NavBar />
      <main className={styles["layout"]}>{children}</main>
    </>
  );
};
