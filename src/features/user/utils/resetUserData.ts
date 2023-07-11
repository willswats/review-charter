import { Dispatch } from "react";
import { initialState, UserActions } from "@/features/user";

interface ResetUserData {
  dispatch: Dispatch<UserActions>;
}

export const resetUserData = async ({ dispatch }: ResetUserData) => {
  dispatch({
    type: "set-user",
    payload: {
      avatarUrl: initialState.user.avatarUrl,
      bannerUrl: initialState.user.bannerUrl,
      userName: initialState.user.userName,
      anime: initialState.user.anime,
      manga: initialState.user.manga,
    },
  });
};
