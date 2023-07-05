import { useEffect } from "react";
import { useRouter } from "next/router";
import { UserLayout, UserControls, useUserContext } from "@/features/user";

import styles from "@/styles/User.module.css";

export default function UserHome() {
  const router = useRouter();
  const userContext = useUserContext();

  useEffect(() => {
    if (userContext.state.userName !== "") {
      router.push(`/user/${userContext.state.userName}`);
    }
  }, []);

  return (
    <UserLayout title={"user"}>
      <UserControls state={userContext.state} dispatch={userContext.dispatch} />
      <div className={styles["user__instructions"]}>
        Enter a username into the input to chart a user.
      </div>
    </UserLayout>
  );
}
