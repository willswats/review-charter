import { ChangeEvent, FormEvent } from "react";

import styles from "./styles.module.css";

interface FormInputTextProps {
  labelText: string;
  inputValue: string;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormInputText = ({
  labelText,
  inputValue,
  submitHandler,
  changeHandler,
}: FormInputTextProps) => {
  return (
    <form onSubmit={submitHandler}>
      <label>{labelText}</label>
      <input onChange={changeHandler} value={inputValue} />
    </form>
  );
};
