import { UserLayout, UserControls, useUserContext } from "@/features/user";

import styles from "@/styles/User.module.css";

export default function UserHome() {
  const userContext = useUserContext();

  return (
    <UserLayout>
      <UserControls state={userContext.state} dispatch={userContext.dispatch} />
      <div className={styles["user__instructions"]}>
        Enter a username into the input to chart a user.
      </div>
    </UserLayout>
  );
}
