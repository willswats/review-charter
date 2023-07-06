import {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from "react";

import { State, UserActions, initialState, reducer } from "@/features/user";

interface IUserContext {
  state: State;
  dispatch: Dispatch<UserActions>;
}

interface IUserContextProvider {
  children: ReactNode;
}

const UserContext = createContext<IUserContext | null>(null);

export const useUserContext = () => {
  const currentUserContext = useContext(UserContext);

  if (!currentUserContext) {
    throw new Error(
      "useUserContext has to be used within <CurrentUserContext.Provider>"
    );
  }

  return currentUserContext;
};

export const UserContextProvider = ({ children }: IUserContextProvider) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
