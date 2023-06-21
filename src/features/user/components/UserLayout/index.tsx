import { ReactNode } from "react";
import Head from "next/head";

import { NavBar } from "@/components/NavBar";
import { UserControls } from "@/features/user";

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
      <main className={styles["layout"]}>
        <UserControls />
        {children}
      </main>
    </>
  );
};
