import type { AppProps } from "next/app";
import Head from "next/head";
import { useReducer } from "react";
import { initialState, reducer } from "@/features/user";
import { UserContext } from "@/features/user/context/UserContext";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UserContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}
