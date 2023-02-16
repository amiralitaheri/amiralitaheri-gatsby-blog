import React, { FC } from "react";
import * as styles from "./skill.module.css";
import type { Skill as ISkill } from "../types/skill";

const Skill: FC<{ skill: ISkill }> = ({ skill }) => (
  <div className={styles.skill}>
    <div className={styles.verticalLine} />
    <div className={styles.text}>
      <h2>{skill.name}</h2>
      <ul className={styles.subSkills}>
        {skill.subSkills.map((subSkill) => (
          <li key={subSkill}>{subSkill}</li>
        ))}
      </ul>
      {skill.description}
    </div>
  </div>
);

export default Skill;
