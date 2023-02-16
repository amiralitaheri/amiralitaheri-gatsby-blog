import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import Banner from "../components/banner";
import AboutMe from "../components/aboutMe";
import Works from "../components/works";
import Skills from "../components/skills";

const IndexPage = () => (
  <Layout>
    <Banner />
    <Works limit={3} />
    <Skills />
    <AboutMe />
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />;

export default IndexPage;
