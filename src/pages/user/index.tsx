import { useEffect } from "react";
import { UserLayout, resetUserData, useUserContext } from "@/features/user";

import styles from "@/styles/User.module.css";

export default function UserHome() {
  const { dispatch } = useUserContext();

  useEffect(() => {
    resetUserData({ dispatch });
  }, [dispatch]);

  return (
    <UserLayout>
      <div className={styles["user__instructions"]}>
        Enter a username into the input to chart a user (e.g. &apos;nazo&apos;).
      </div>
    </UserLayout>
  );
}
