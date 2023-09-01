import React, { FC } from "react";
import * as styles from "./aboutMe.module.css";
import AboutMeContent from "../content/aboutMe.mdx";

const AboutMe: FC = () => {
  return (
    <section id="about">
      <div className="sectionHeader">
        <h2>About Me</h2>
        <p>Few words about me, if you are interested to know me better.</p>
      </div>
      <div className={styles.container}>
        <AboutMeContent />
      </div>
    </section>
  );
};
export default AboutMe;
