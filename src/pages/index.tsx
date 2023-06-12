import Head from "next/head";

import { NavBar, LinkButton } from "@/components";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Review Charter</title>
        <meta
          name="description"
          content="Visualise AniList data in multiple charts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
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
