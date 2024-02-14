/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path");
const BlogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { title: { eq: "post" } } }) {
        nodes {
          id
          frontmatter {
            title
            slug
            publishedAt
            excerpt
            language
            tags
            mainImage {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((node) => {
    createPage({
      path: `/blog/${node.frontmatter.language}/${node.frontmatter.slug}`,
      component: `${BlogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        frontmatter: node.frontmatter,
      },
    });
  });
};
