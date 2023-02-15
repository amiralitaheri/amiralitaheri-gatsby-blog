import React, { FC } from "react";
import * as styles from "./work.module.css";
import type { Work as IWork } from "../types/work";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Work: FC<{ direction: "row" | "row-reverse"; work: IWork }> = ({
  work,
  direction,
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "works" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
            name
          }
        }
      }
    }
  `);

  const edge = data.allFile.edges.find(
    (edge: any) => edge.node.name === work.imageName
  );

  const image = getImage(edge.node);
  return (
    <div className={styles.work} style={{ flexDirection: direction || "row" }}>
      <div className={styles.verticalLine} />
      <GatsbyImage
        className={styles.image}
        image={image!!}
        alt={work.name}
        objectFit="contain"
      />

      <div className={styles.verticalLine} />
      <div className={styles.text}>
        <span className={styles.date}>{work.date}</span>
        <h3>{work.name}</h3>
        {work.description}
        <div className={styles.tags}>
          {work.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
