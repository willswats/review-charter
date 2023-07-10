import { ChangeEvent, FormEvent, forwardRef } from "react";

import { SvgButton } from "@/components/SvgButton";

import SvgSearch from "public/assets/search-line.svg";

import styles from "./styles.module.css";

interface SearchProps {
  placeHolder: string;
  inputValue: string;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ placeHolder, inputValue, submitHandler, changeHandler }, ref) => {
    return (
      <form onSubmit={submitHandler} className={styles["search"]}>
        <input
          className={styles["search__input"]}
          value={inputValue}
          ref={ref}
          onChange={changeHandler}
          placeholder={placeHolder}
        />
        <SvgButton svg={<SvgSearch />} />
      </form>
    );
  }
);

Search.displayName = "Search";
