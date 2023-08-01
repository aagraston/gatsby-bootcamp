import React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout'

const contactPage = () => {
  return (
    <Layout>
      <h1>Contact Page</h1>
      <p>Contact page goes here.</p>
      <p>
        Check my sticker page out on twitter:{" "}
        <Link to="https://twitter.com/leafybucket">LeafBucket</Link>
      </p>
    </Layout>
  );
};

export default contactPage;
