import React, { FC } from "react";
import BlogPostPreview from "./blogPostPreview";

import * as styles from "./blogPostPreviewGrid.module.css";
import { Frontmatter } from "../types/post";

const BlogPostPreviewGrid: FC<{
  posts: {
    id: string;
    frontmatter: Frontmatter;
  }[];
}> = ({ posts }) => {
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <BlogPostPreview {...post} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BlogPostPreviewGrid;
