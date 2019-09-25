import React from "react";
import { graphql } from "gatsby";
import ProjectDescriptionSidebar from '../components/project-description-sidebar';
import ProjectDescriptionContent from '../components/project-description-content';

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post);
  return (
    <div className="project-description-container">
      <ProjectDescriptionSidebar
        title={post.frontmatter.title} 
        html={post.html} 
        tags={post.frontmatter.tags} 
        pagelink={post.frontmatter.pagelink}
      />
      <ProjectDescriptionContent srcs={post.frontmatter.srcs} />
    </div>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      srcs
      tags
      pagelink
    }
  }
}
`