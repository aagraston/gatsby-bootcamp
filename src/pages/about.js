import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const aboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>An about page will go here.</p>
      <p>
        <Link to="/contact">Get in Touch!</Link>
      </p>
    </Layout>
  );
};

export default aboutPage;
