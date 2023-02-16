import React, { FC } from "react";
import * as styles from "./postFooter.module.css";
import { FaClipboard, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const PostFooter: FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.shareButtons}>
        <button
          className={styles.shareButton}
          type="button"
          onClick={() => {
            const url = `https://t.me/share/url?url=${location.href}`;
            window.open(url, "_blank")?.focus?.();
          }}
        >
          <FaTelegramPlane />
          Share on Telegram
        </button>
        <button
          className={styles.shareButton}
          type="button"
          onClick={() => {
            const url = `https://twitter.com/intent/tweet?url=${
              location.href
            }&hashtags=${tags.join(",")}&related=amiralitaheri64`;
            window.open(url, "_blank")?.focus?.();
          }}
        >
          <FaTwitter />
          Share on Twitter
        </button>
        <button
          className={styles.shareButton}
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(location.href);
          }}
        >
          <FaClipboard />
          Copy url to clipboard
        </button>
      </div>
    </footer>
  );
};

export default PostFooter;
