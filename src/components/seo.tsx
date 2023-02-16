import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FC } from "react";
import { getImage, ImageDataLike } from "gatsby-plugin-image";

interface SeoProps {
  description?: string;
  title?: string;
  keywords?: string;
  mainImage?: ImageDataLike;
  children?: React.ReactNode;
}

const Seo: FC<SeoProps> = ({
  description,
  title,
  keywords,
  children,
  mainImage,
}) => {
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
  const image = mainImage && getImage(mainImage);

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keys} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      {image && image.images.fallback?.src && (
        <>
          <meta property="og:image" content={image.images.fallback?.src} />
          <meta property="twitter:image" content={image.images.fallback?.src} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@amiralitaheri64" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {children}
    </>
  );
};

export default Seo;
