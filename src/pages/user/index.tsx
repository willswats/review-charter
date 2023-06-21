import Head from "next/head";
import { ChangeEvent, FormEvent, useState, useReducer } from "react";

import { NavBar, Search } from "@/components";

import {
  //Components
  UserModeButtons,
  UserRefreshButton,
  initialState,
  fetchUser,
  reducer,
} from "@/features/user";

import User from "@/pages/user/[user]";

import styles from "@/styles/User.module.css";

export default function UserHome() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formInputTextValue, setSearchValue] = useState<string>("");

  const searchSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formInputTextValue !== "") {
      fetchUser({ name: formInputTextValue, dispatch });
    }
  };

  const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const refreshButtonClickHandler = () => {
    if (state.userName.length > 0) {
      fetchUser({ name: state.userName, dispatch });
    }
  };

  return (
    <>
      <Head>
        <title>Review Charter - User</title>
      </Head>

      <NavBar />
      <main className={styles["user"]}>
        <div className={styles["user__controls"]}>
          <div className={styles["user__controls-left"]}>
            <UserModeButtons mode={state.mode} dispatch={dispatch} />
          </div>
          <div className={styles["user__controls-middle"]}>
            <Search
              placeHolder="Username..."
              inputValue={formInputTextValue}
              submitHandler={searchSubmitHandler}
              changeHandler={searchChangeHandler}
            />
          </div>
          <div className={styles["user__controls-right"]}>
            <UserRefreshButton clickHandler={refreshButtonClickHandler} />
          </div>
        </div>
        <div className={styles["user__instructions"]}>
          Enter a username into the input to chart a user.
        </div>
        <User />
      </main>
    </>
  );
}
