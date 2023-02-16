import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FC } from "react";

interface SeoProps {
  description?: string;
  title?: string;
  keywords?: string;
  children?: React.ReactNode;
}

const Seo: FC<SeoProps> = ({ description, title, keywords, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const keys = keywords || site.siteMetadata?.keywords;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keys} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  );
};

export default Seo;
