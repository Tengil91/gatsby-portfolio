import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="project-description-container">
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <div className="blog-page-content">
        <h1>{post.frontmatter.title}</h1>
        <Link to="/" className="project-description-button">Home</Link>
      <div dangerouslySetInnerHTML={{ __html: post.html }} /></div>
    </div>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
    }
  }
}
`