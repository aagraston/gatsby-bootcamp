import { Link } from "gatsby"
import React from "react";

const aboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>An about page will go here.</p>
      <p><Link to="/contact">Get in Touch!</Link></p>
    </div>
  );
};

export default aboutPage;
