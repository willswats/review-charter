import styles from "./styles.module.css";

interface UserStatisticProps {
  statistic: string;
  text: string;
  svg: JSX.Element;
}

export const UserStatistic = ({ statistic, text, svg }: UserStatisticProps) => {
  return (
    <div className={styles["user-statistic"]}>
      <div className={styles["user-statistic__top"]}>
        <span className={styles["user-statistic__svg"]}>{svg}</span>
        <p className={styles["user-statistic__statistic"]}>{statistic}</p>
      </div>
      <p>{text}</p>
    </div>
  );
};
