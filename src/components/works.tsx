import { Link } from "gatsby";
import React, { FC } from "react";
import Work from "./work";
import type { Work as IWork } from "../types/work";
import Metricdesign from "../content/works/metricdesign.mdx";
import Exbito from "../content/works/exbito.mdx";
import Spotida from "../content/works/spotida.mdx";
import JDate from "../content/works/jdate.mdx";
import TwitterBot from "../content/works/twitterbot.mdx";

const works: IWork[] = [
  {
    name: "Exbito",
    description: <Exbito />,
    date: "2020 - 2023",
    imageName: "exbito",
    tags: ["Website", "Next.js", "React", "Front-end Development", "Python"],
  },
  {
    name: "Spotida",
    description: <Spotida />,
    date: "2020",
    imageName: "spotida",
    tags: ["Website", "React", "Redux", "Spotify", "SCSS"],
  },
  {
    name: "JDate",
    description: <JDate />,
    date: "2020",
    imageName: "jdate",
    tags: ["Dart", "Library"],
  },
  {
    name: "Twitter Bot",
    description: <TwitterBot />,
    date: "2020",
    imageName: "twitterbot",
    tags: ["Bot", "Python", "Twitter"],
  },
  {
    name: "Metric Design Website",
    description: <Metricdesign />,
    date: "2018",
    imageName: "metricdesign",
    tags: ["Website", "HTML", "CSS", "PHP"],
  },
];

const Works: FC<{ limit?: number }> = ({ limit }) => {
  return (
    <section id="works">
      <div className="sectionHeader">
        <h2>Works</h2>
        {!!limit && (
          <p>
            A handful selection of my works. Click here to see all my{" "}
            <Link to="/works/">works</Link>.
          </p>
        )}
      </div>

      {works.slice(0, limit).map((work, index) => (
        <Work
          key={index}
          direction={index % 2 === 0 ? "row" : "row-reverse"}
          work={work}
        />
      ))}
    </section>
  );
};
export default Works;
