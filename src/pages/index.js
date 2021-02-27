import React from "react"

import Layout2 from "../components/layout2"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout2>
    <SEO title="Home" />

    <div
      style={{
        maxWidth: `800px`,
        margin: `auto`,
        marginBottom: `1.45rem`,
      }}
    >
      <div></div>
      <h1>This site was built using React with Gatsbys.</h1>
      <p>
        All Photos and videos were shot and edited by myself. I decided to use
        Gatsby to showcase my work because of the speed this framework offers.
        My portfolio site demonstrates my current knowledge and capabilities
        using ReactJS.{" "}
      </p>
    </div>
  </Layout2>
)

export default IndexPage
