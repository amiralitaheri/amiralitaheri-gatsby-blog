import React, { FC } from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaGitlab,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import * as styles from "./socialLinks.module.css";

const SocialLinks: FC<{ dir: "column" | "row" }> = ({ dir }) => (
  <ul className={styles.socialLinks} style={{ flexDirection: dir }}>
    <li>
      <a
        href="https://github.com/amiralitaheri"
        target="_blank"
        rel="noopener"
        aria-label="github"
      >
        <FaGithub />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/amiralitaheri64"
        target="_blank"
        rel="noopener"
        aria-label="twitter"
      >
        <FaXTwitter />
      </a>
    </li>
    <li>
      <a
        href="https://t.me/amiralitaheri"
        target="_blank"
        rel="noopener"
        aria-label="telegram"
      >
        <FaTelegramPlane />
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/amiralitaheri64"
        target="_blank"
        rel="noopener"
        aria-label="instagram"
      >
        <FaInstagram />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/amiralitaheri64/"
        target="_blank"
        rel="noopener"
        aria-label="linkedin"
      >
        <FaLinkedinIn />
      </a>
    </li>
    <li>
      <a
        href="mailto:amiralitaheri64@gmail.com"
        target="_blank"
        rel="noopener"
        aria-label="email"
      >
        <FiMail />
      </a>
    </li>
    <li>
      <a
        href="https://gitlab.com/amiralitaheri"
        target="_blank"
        rel="noopener"
        aria-label="gitlab"
      >
        <FaGitlab />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
