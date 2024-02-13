import React from "react";
import Skill from "./skill";
import type { Skill as ISkill } from "../types/skill";
import FrontEnd from "../content/skills/frontend.mdx";
import WebScrapping from "../content/skills/webScrapping.mdx";
import MobileApp from "../content/skills/mobileApp.mdx";

const skills: ISkill[] = [
  {
    name: "Front-End Development",
    description: <FrontEnd />,
    subSkills: ["React", "Next.js", "Solid.js", "JAMStack", "Typescript"],
  },
  {
    name: "Web Scraping",
    description: <WebScrapping />,
    subSkills: ["Python", "Scrapy"],
  },
  {
    name: "Mobile App Development",
    description: <MobileApp />,
    subSkills: ["Kotlin", "Dart", "Flutter", "Android"],
  },
];
const Skills = () => {
  return (
    <section id="skills">
      <div className="sectionHeader">
        <h2>Skills</h2>
        <p>A summery of things that I am good at.</p>
      </div>

      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </section>
  );
};
export default Skills;
