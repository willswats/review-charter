import styles from "./styles.module.css";

interface StatisticProps {
  statistic: string;
  text: string;
}

export const Statistic = ({ statistic, text }: StatisticProps) => {
  return (
    <div className={styles["statistic"]}>
      <p className={styles["statistic__statistic"]}>{statistic}</p>
      <p className={styles["statistic__text"]}>{text}</p>
    </div>
  );
};
