import { format, formatDistanceToNow, differenceInDays } from "date-fns";
import React, { FC } from "react";
import Container from "./container";

import * as styles from "./blogPost.module.css";
import { cn } from "./utils";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Frontmatter } from "../types/post";
import PostFooter from './postFooter'

const BlogPost: FC<
  {
    children: React.ReactNode;
  } & Frontmatter
> = ({ children, tags, title, mainImage, publishedAt, language }) => {
  const image = getImage(mainImage.src);

  return (
    <article className={styles.root}>
      <GatsbyImage
        className={styles.mainImage}
        image={image!!}
        alt={mainImage.alt}
        objectFit="contain"
      />
      <Container>
        <div className={styles.grid}>
          <div className={cn(styles.mainContent, language)}>
            <h1 className={styles.title}>{title}</h1>
            {children}
              <PostFooter tags={tags}/>
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistanceToNow(new Date(publishedAt))
                  : format(new Date(publishedAt), "MMMM do, yyyy")}
              </div>
            )}
            {tags && (
              <div className={styles.tags}>
                <h3 className={styles.tagsHeadline}>Tags</h3>
                <ul>
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
};

export default BlogPost;
