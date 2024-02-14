import { graphql, Link, useStaticQuery } from "gatsby";
import React, { FC } from "react";
import Work from "./work";
import { Work as IWork } from "../types/work";

const Works: FC<{ limit?: number }> = ({ limit }) => {
  const { works } = useStaticQuery(graphql`
    query Works {
      works: allMdx(filter: { frontmatter: { type: { eq: "work" } } }, sort: {frontmatter: {date: DESC}}) {
        nodes {
          id
          frontmatter {
            name
            date
            tags
            image {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
          body
        }
      }
    }
  `);
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

      {works.nodes.slice(0, limit).map((work: IWork, index: number) => (
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
