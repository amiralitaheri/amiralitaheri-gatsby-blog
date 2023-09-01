import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as styles from "./header.module.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/all";
import { cn } from "./utils";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to="/">{data.site.siteMetadata?.title}</Link>
        </div>

        <button
          aria-label="menu"
          className={styles.toggleNavButton}
          onClick={() => setShowNav((prevState) => !prevState)}
        >
          <RxHamburgerMenu />
        </button>
        {(
          typeof window !== "undefined"
            ? window.location.pathname === "/"
            : true
        ) ? (
          <nav className={cn(styles.nav, showNav && styles.showNav)}>
            <ul>
              <li>
                <a href="#works">Works</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <Link to="/blog/">Blog</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className={cn(styles.nav, showNav && styles.showNav)}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog/">Blog</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
