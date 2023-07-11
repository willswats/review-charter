import { Dispatch } from "react";
import { fetchUser, UserActions } from "@/features/user";

interface SetUserData {
  name: string;
  dispatch: Dispatch<UserActions>;
}

export const setUserData = async ({ name, dispatch }: SetUserData) => {
  dispatch({ type: "set-loading", payload: true });
  try {
    const userData = await fetchUser({
      name: name,
    });
    dispatch({ type: "set-user", payload: userData });
  } catch (e) {
    const error = e as Error;
    dispatch({ type: "set-error-message", payload: error.message });
  }
  dispatch({ type: "set-loading", payload: false });
};
