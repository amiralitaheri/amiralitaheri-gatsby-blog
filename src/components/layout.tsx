import React, { FC } from "react";

import Header from "./header";
import "../styles/layout.css";
import * as styles from "./layout.module.css";
import SocialLinks from "./socialLinks";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <SocialLinks dir="row" />
          <div className={styles.siteInfo}>
            &copy; {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
