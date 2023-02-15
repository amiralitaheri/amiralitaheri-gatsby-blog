import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import Works from "../components/works";

const WorksPage = () => (
  <Layout>
    <Works />
  </Layout>
);

export const Head = () => <Seo />;

export default WorksPage;
