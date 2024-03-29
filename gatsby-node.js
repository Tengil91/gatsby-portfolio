const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              pagetype
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if(node.frontmatter.pagetype === 'project'){
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/project-description.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    } else if(node.frontmatter.pagetype === 'blog'){
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-page.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    }
  })
}