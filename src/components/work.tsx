import React, { FC } from "react";
import * as styles from "./work.module.css";
import type { Work as IWork } from "../types/work";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RenderMdx from "./RenderMdx";

const Work: FC<{ direction: "row" | "row-reverse"; work: IWork }> = ({
  work,
  direction,
}) => {
  const image = getImage(work.frontmatter.image.src);
  return (
    <div className={styles.work} style={{ flexDirection: direction || "row" }}>
      <div className={styles.verticalLine} />
      <GatsbyImage
        className={styles.image}
        image={image!!}
        alt={work.frontmatter.image.alt}
        objectFit="contain"
      />

      <div className={styles.verticalLine} />
      <div className={styles.text}>
        <span className={styles.date}>{work.frontmatter.date}</span>
        <h3>{work.frontmatter.name}</h3>
        <RenderMdx mdx={work.body} />
        <div className={styles.tags}>
          {work.frontmatter.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
