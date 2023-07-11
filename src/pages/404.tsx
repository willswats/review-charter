import Head from "next/head";
import { NavBar } from "@/components";
import { useUserContext } from "@/features/user";

import styles from "@/styles/404.module.css";

export default function FourZeroFour() {
  const { state } = useUserContext();
  const { userName } = state.user;

  return (
    <>
      <Head>
        <title>404 Page Not Found - Review Charter</title>
      </Head>

      <NavBar userName={userName} />

      <main className={styles["four-zero-four"]}>
        <div className={styles["four-zero-four__text"]}>
          404 Page not found.
        </div>
      </main>
    </>
  );
}
