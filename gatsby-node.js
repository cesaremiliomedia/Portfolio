/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const postsQuery = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (postsQuery.errors) {
    reporter.panic("unable to create posts")
  }

  const posts = postsQuery.data.allMdx.nodes
  posts.forEach(post => {
    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
