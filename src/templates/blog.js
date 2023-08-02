import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import {renderRichText} from 'gatsby-source-contentful/rich-text'

// export const query = graphql`
//   query ($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `;

export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    publishedDate(fromNow:true)
    body {
      raw
    }
  }
}`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block":node => {
        return (
          <>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
          <img 
          src={node.data.target.fixed.src}
          alt={node.data.target.title} />
          </>
        )
      }
    }
  }

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <h2>{props.data.contentfulBlogPost.publishedDate}</h2>
      {renderRichText(props.data.contentfulBlogPost.body, options)}
    </Layout>
  );
};

export default Blog;
