import styles from "./styles.module.css";

interface StatisticProps {
  statistic: string;
  text: string;
  svg: JSX.Element;
}

export const Statistic = ({ statistic, text, svg }: StatisticProps) => {
  return (
    <div className={styles["statistic"]}>
      <div className={styles["statistic__top"]}>
        <span className={styles["statistic__svg"]}>{svg}</span>
        <p className={styles["statistic__statistic"]}>{statistic}</p>
      </div>
      <p>{text}</p>
    </div>
  );
};
