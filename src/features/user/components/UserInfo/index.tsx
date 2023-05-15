import styles from "./styles.module.css";

interface UserInfo {
  avatarUrl: string;
  userName: string;
}

export const UserInfo = ({ avatarUrl, userName }: UserInfo) => {
  return (
    <div className={styles["user-info"]}>
      <img className={styles["user-info__avatar"]} src={avatarUrl} />
      <h1>{userName} </h1>
    </div>
  );
};
