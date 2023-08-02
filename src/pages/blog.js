import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as blogStyles from "./blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          const slug = edge.node.fields.slug;
          const linkString = `/blog/${slug}`;
          return (
            <li className={blogStyles.post}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              <p>
                <Link to={linkString}>Read Blog</Link>
              </p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
