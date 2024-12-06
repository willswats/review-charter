import styles from "./styles.module.css";

interface LinkSvgProps {
  svg: JSX.Element;
  href: string;
}
export const LinkSvg = ({ svg, href }: LinkSvgProps) => {
  return (
    <a
      className={styles["svg-link"]}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {svg}
    </a>
  );
};
