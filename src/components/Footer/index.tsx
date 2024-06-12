import { SvgLink } from "@/components/SvgLink";

import SvgGitHub from "public/assets/github-fill.svg";

import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SvgLink
        href="https://github.com/willswats/review-charter"
        svg={<SvgGitHub />}
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
