import styles from "./styles.module.css";

interface SvgLinkProps {
  svg: JSX.Element;
  href: string;
}
export const SvgLink = ({ svg, href }: SvgLinkProps) => {
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
