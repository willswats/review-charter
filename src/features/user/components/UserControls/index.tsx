import { ChangeEvent, FormEvent, Dispatch, useState } from "react";
import { useRouter } from "next/router";

import { Search } from "@/components";
import {
  // Interfaces
  State,
  // Types
  UserActions,
  // Components
  UserModeButtons,
  UserRefreshButton,
} from "@/features/user";

import styles from "./styles.module.css";

interface UserControlsProps {
  state: State;
  dispatch: Dispatch<UserActions>;
}

export const UserControls = ({ state, dispatch }: UserControlsProps) => {
  const router = useRouter();
  const [formInputTextValue, setSearchValue] = useState<string>("");

  const searchSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (router.query.user) {
      router.push(formInputTextValue);
    } else {
      router.push(`user/${formInputTextValue}`);
    }
    setSearchValue("");
  };

  const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const refreshButtonClickHandler = () => {
    if (state.userName.length > 0) {
    }
  };

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
