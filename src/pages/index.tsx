import Head from "next/head";

import { LinkButton, NavBar, Footer } from "@/components";
import { useUserContext } from "@/features/user";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const { state } = useUserContext();
  const { userName } = state.user;

  return (
    <>
      <Head>
        <title>Review Charter</title>
      </Head>

      <NavBar userName={userName} />
      <main className={styles.home}>
        <section className={styles["home__content"]}>
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
              <LinkButton href={`/user/${userName}`} text="Chart a User" />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
