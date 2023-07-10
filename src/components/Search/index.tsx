import { ChangeEvent, FormEvent, LegacyRef } from "react";

import { SvgButton } from "@/components/SvgButton";

import SvgSearch from "public/assets/search-line.svg";

import styles from "./styles.module.css";

interface SearchProps {
  placeHolder: string;
  inputValue: string;
  inputRef: LegacyRef<HTMLInputElement>;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({
  placeHolder,
  inputValue,
  inputRef,
  submitHandler,
  changeHandler,
}: SearchProps) => {
  return (
    <form onSubmit={submitHandler} className={styles["search"]}>
      <input
        className={styles["search__input"]}
        value={inputValue}
        ref={inputRef}
        onChange={changeHandler}
        placeholder={placeHolder}
      />
      <SvgButton svg={<SvgSearch />} />
    </form>
  );
};
