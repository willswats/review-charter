import Link from "next/link";
import styles from "./styles.module.css";

interface LinkButtonProps {
  text: string;
  href: string;
}

export const LinkButton = ({ text, href }: LinkButtonProps) => {
  return (
    <Link className={styles["link-button"]} href={href}>
      {text}
    </Link>
  );
};
