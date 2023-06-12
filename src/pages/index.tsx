import Head from "next/head";

import { NavBar, LinkButton } from "@/components";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Review Charter</title>
      </Head>

      <NavBar />
      <main className={styles.home}>
        <div className={styles["home__container"]}>
          <h1 className={styles["home__title"]}>Review Charter</h1>
          <p className={styles["home__description"]}>
            Visualise
            <a
              className={styles["home__description-link"]}
              href="https://anilist.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              AniList
            </a>
            data in multiple charts.
          </p>
          <div className={styles["home__button-container"]}>
            <LinkButton href="/user" text="Chart a User" />
          </div>
        </div>
      </main>
    </>
  );
}
