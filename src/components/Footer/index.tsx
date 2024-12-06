import { LinkSvg, SvgGitHubFill } from "@/components";

import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LinkSvg
        href="https://github.com/willswats/review-charter"
        svg={<SvgGitHubFill />}
      />
      <a
        href="https://williamwatson.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        williamwatson.dev
      </a>
    </footer>
  );
};
