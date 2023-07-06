import { UserLayout, UserControls } from "@/features/user";

import styles from "@/styles/User.module.css";

export default function UserHome() {
  return (
    <UserLayout>
      <UserControls />
      <div className={styles["user__instructions"]}>
        Enter a username into the input to chart a user.
      </div>
    </UserLayout>
  );
}
