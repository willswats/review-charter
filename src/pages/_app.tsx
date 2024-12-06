import type { AppProps } from "next/app";
import Head from "next/head";
import { Roboto } from "next/font/google";

import { UserContextProvider } from "@/features/user";

import "@/styles/globals.css";

const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={roboto.className}>
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </main>
    </>
  );
}
