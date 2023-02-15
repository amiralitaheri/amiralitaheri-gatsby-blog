import { Link } from "gatsby";
import React from "react";
import * as styles from "./mainSpeech.module.css";

const MainSpeech = () => (
  <div>
    <ul className={styles.mainSpeech}>
      <li>Fast learner</li>
      <li>React front-end developer</li>
      <li>Professional google searcher</li>
      <li>A Confused man in tech world</li>
      <li>Computer engineering student</li>
    </ul>
    <div style={{ height: "2em" }} />
    <Link className={styles.primaryAction} to="/blog/">
      Blog
    </Link>
    <a className={styles.secondaryAction} href="#works">
      Works
    </a>
  </div>
);

export default MainSpeech;
