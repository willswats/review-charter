import { UserLayout, UserControls } from "@/features/user";

import { useUserContext } from "@/features/user/context/UserContext";

import styles from "@/styles/User.module.css";

export default function UserHome() {
  const currentUserContext = useUserContext();

  return (
    <UserLayout title={"user"}>
      <UserControls
        state={currentUserContext.state}
        dispatch={currentUserContext.dispatch}
      />
      <div className={styles["user__instructions"]}>
        Enter a username into the input to chart a user.
      </div>
    </UserLayout>
  );
}
