import { createContext, Dispatch, useContext } from "react";
import { UserActions, State } from "@/features/user";

type UserContextType = {
  state: State;
  dispatch: Dispatch<UserActions>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
  const currentUserContext = useContext(UserContext);

  if (!currentUserContext) {
    throw new Error(
      "useUserContext has to be used within <CurrentUserContext.Provider>"
    );
  }

  return currentUserContext;
};
