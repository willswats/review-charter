import { ChangeEvent, FormEvent } from "react";

import styles from "./styles.module.css";

interface FormInputTextProps {
  placeHolder: string;
  inputValue: string;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormInputText = ({
  placeHolder,
  inputValue,
  submitHandler,
  changeHandler,
}: FormInputTextProps) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        className={styles["form-input-text__input"]}
        onChange={changeHandler}
        value={inputValue}
        placeholder={placeHolder}
      />
    </form>
  );
};
