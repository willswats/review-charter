import styles from "./styles.module.css";

interface UserStatisticProps {
  statistic: string;
  text: string;
}

export const UserStatistic = ({ statistic, text }: UserStatisticProps) => {
  return (
    <div className={styles["user-statistic"]}>
      <p className={styles["user-statistic__statistic"]}>{statistic}</p>
      <p className={styles["user-statistic__text"]}>{text}</p>
    </div>
  );
};
