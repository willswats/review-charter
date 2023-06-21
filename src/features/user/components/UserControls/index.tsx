import { ChangeEvent, FormEvent, useState, useReducer } from "react";

import { Search } from "@/components";
import { reducer, initialState } from "@/features/user";

import { UserModeButtons, UserRefreshButton } from "@/features/user";

import styles from "./styles.module.css";

export const UserControls = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formInputTextValue, setSearchValue] = useState<string>("");

  const searchSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const refreshButtonClickHandler = () => {};

  return (
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
  );
};
