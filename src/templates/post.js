import React from "react"
import Layout2 from "../components/layout2"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query MyQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`
export default ({
  data: {
    mdx: {
      frontmatter: { title },
      body: content,
    },
  },
}) => (
  <Layout2>
    <h1>{title}</h1>
    <MDXRenderer>{content}</MDXRenderer>
  </Layout2>
)
