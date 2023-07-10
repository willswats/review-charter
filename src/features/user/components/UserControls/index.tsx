import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { useRouter } from "next/router";

import { Search, RefreshButton } from "@/components";
import { UserModeButtons, fetchUser, useUserContext } from "@/features/user";

import styles from "./styles.module.css";

export const UserControls = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useUserContext();
  const { userName } = state;

  const [searchValue, setSearchValue] = useState<string>("");

  const searchSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchInputRef.current?.blur();

    const regex = /[^A-Za-z0-9]/g;
    if (searchValue.length > 0 && searchValue.match(regex) === null) {
      if (router.query.user) {
        router.push(searchValue);
      } else {
        router.push(`user/${searchValue}`);
      }
    }
    setSearchValue("");
  };

  const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const refreshButtonClickHandler = () => {
    if (userName.length > 0) {
      fetchUser({
        name: userName,
        dispatch,
      });
    }
  };

  return (
    <div className={styles["user__controls"]}>
      <div className={styles["user__controls-left"]}>
        <UserModeButtons />
      </div>
      <div className={styles["user__controls-middle"]}>
        <Search
          placeHolder="Username..."
          inputValue={searchValue}
          inputRef={searchInputRef}
          submitHandler={searchSubmitHandler}
          changeHandler={searchChangeHandler}
        />
      </div>
      <div className={styles["user__controls-right"]}>
        <RefreshButton clickHandler={refreshButtonClickHandler} />
      </div>
    </div>
  );
};
