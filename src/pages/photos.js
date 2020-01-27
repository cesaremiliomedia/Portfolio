import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout2 from "../components/layout2"
import Lightbox from "../components/Lightbox"
import { Spring } from "react-spring/renderprops"

const ImagePage = ({ data }) => (
  <Layout2>
    <h1>Photography</h1>
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 500, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <Lightbox images={data.allImageSharp.edges} />
        </div>
      )}
    </Spring>
  </Layout2>
)

ImagePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ImagePage

export const pageQuery = graphql`
  query ImageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp {
      edges {
        node {
          sizes(maxWidth: 1800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
