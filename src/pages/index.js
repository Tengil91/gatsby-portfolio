import React from "react";
import { graphql } from "gatsby";
import Nav from '../components/nav';
import Header from '../components/header';
import Projects from '../components/projects';
import Footer from '../components/footer';

const IndexPage = ( {data}) => (
  <div>
    <Nav />
    <Header />
    <Projects data={data} />
    <Footer />
  </div>
)

export default IndexPage;


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            src
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`