/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import("gatsby").GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Seyed Amirali Taheri",
    description:
      "Personal website (blog and portfolio) of Seyed Amirali Taheri; A software developer.",
    siteUrl: "https://amiralitaheri.ir",
    keywords:
      "blog, developer, amirali, portfolio, برنامه نویس, امیرعلی, وبلاگ, فرانت, frontend, react, amiralitaheri",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        mdxOptions: {
          remarkPlugins: [require("remark-gfm")],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              showCaptions: true
            },
          },
        ],
      },
    },
    "gatsby-plugin-dts-css-modules",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "Vazirmatn",
            file: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@200;300;400;500;700&display=swap",
          },
        ],
      },
    },
  ],
  graphqlTypegen: true,
};
