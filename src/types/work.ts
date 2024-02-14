import React from "react";
import {ImageDataLike} from "gatsby-plugin-image";

export interface Frontmatter {
  name: string;
  description: React.ReactNode;
  date: string;
  tags: string[];
  image: { src: ImageDataLike; alt: string };
}


export interface Work {
  id: string;
  frontmatter: Frontmatter,
  body: string
}
