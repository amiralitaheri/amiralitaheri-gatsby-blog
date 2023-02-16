import { ImageDataLike } from "gatsby-plugin-image";

export interface Frontmatter {
  slug: string;
  excerpt: string;
  tags: string[];
  title: string;
  mainImage: { src: ImageDataLike; alt: string };
  publishedAt: string;
  language: string;
}
