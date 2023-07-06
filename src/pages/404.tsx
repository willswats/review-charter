import Head from "next/head";

import { NavBar } from "@/features/user";

import styles from "@/styles/404.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Review Charter - 404 Page Not Found</title>
      </Head>

      <NavBar />

      <main className={styles["four-zero-four"]}>
        <div className={styles["four-zero-four__text"]}>
          404 - Page not found.
        </div>
      </main>
    </>
  );
}
