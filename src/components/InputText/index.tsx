import { ChangeEvent } from "react";

import styles from "./styles.module.css";

interface InputTextProps {
  labelText: string;
  inputValue: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  labelText,
  inputValue,
  changeHandler,
}: InputTextProps) => {
  return (
    <>
      <label>{labelText}</label>
      <input onChange={changeHandler} value={inputValue} />
    </>
  );
};
