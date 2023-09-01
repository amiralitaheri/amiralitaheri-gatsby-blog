import { format } from "date-fns";
import { Link } from "gatsby";
import React, { FC } from "react";

import * as styles from "./blogPostPreview.module.css";
import { responsiveTitle3 } from "./typography.module.css";
import { cn } from "./utils";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Frontmatter } from "../types/post";

const BlogPostPreview: FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const image = getImage(frontmatter.mainImage.src);
  return (
    <Link className={styles.inGrid} to={`/blog/${frontmatter.language}/${frontmatter.slug}`}>
      <div className={styles.leadMediaThumb}>
        <GatsbyImage
          image={image!!}
          alt={frontmatter.mainImage.alt}
        />
      </div>
      <div className={cn(styles.text, frontmatter.language)}>
        <h3 className={cn(responsiveTitle3, styles.title)}>
          {frontmatter.title}
        </h3>
        <div className={cn(styles.excerpt)}>{frontmatter.excerpt}</div>
        <div className={styles.date}>
          {format(new Date(frontmatter.publishedAt), "MMMM do, yyyy")}
        </div>
      </div>
    </Link>
  );
};

export default BlogPostPreview;
