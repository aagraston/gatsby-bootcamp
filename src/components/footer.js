import React from "react";
import {graphql, useStaticQuery} from 'gatsby';
import * as footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
  `)
  return (
    <footer className={footerStyles.footer}>
      <p>created by {data.site.siteMetadata.author}, © <em>{data.site.siteMetadata.author}, 2023</em></p>
    </footer>
  );
};

export default Footer;
