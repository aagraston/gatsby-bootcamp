import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as blogStyles from "./blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { publishedDate: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          const slug = edge.node.slug;
          const linkString = `/blog/${slug}`;
          return (
            <li className={blogStyles.post}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
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
