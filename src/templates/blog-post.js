import React from "react";
import BlogPost from "../components/blogPost";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";
import Seo from "../components/seo";
import Code from "../components/code";

const BlogPostTemplate = ({ pageContext, children }) => {
  return (
    <Layout>
      <BlogPost {...pageContext.frontmatter}>
        <MDXProvider components={{ code: Code }}>{children}</MDXProvider>
      </BlogPost>
    </Layout>
  );
};

export const Head = ({ pageContext }) => (
  <Seo
    title={pageContext.frontmatter.title || "Untitled"}
    description={pageContext.frontmatter.excerpt}
    // image={post.mainImage}
    keywords={pageContext.frontmatter.tags.join(",")}
  />
);

export default BlogPostTemplate;
