import { UserLayout } from "@/features/user";

import styles from "@/styles/User.module.css";

export default function UserHome() {
  return (
    <UserLayout title="User">
      <div className={styles["user__instructions"]}>
        Enter a username into the input to chart a user.
      </div>
    </UserLayout>
  );
}
