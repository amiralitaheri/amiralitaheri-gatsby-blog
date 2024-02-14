import React from "react";
import { graphql } from "gatsby";
import BlogPostPreviewGrid from "../components/blogPostPreviewGrid";
import Container from "../components/container";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const query = graphql`
  query BlogPostListQuery {
    posts: allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
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
                gatsbyImageData(layout: CONSTRAINED)
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
`;

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        {data && (
          <BlogPostPreviewGrid
            title="Latest blog posts"
            posts={data.posts.nodes}
          />
        )}
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="blog" />;

export default BlogPage;
