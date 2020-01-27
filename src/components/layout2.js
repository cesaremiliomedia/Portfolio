import React from "react"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"
export default ({ children }) => (
  <div>
    <Header />

    <main>{children}</main>
    <Footer />
  </div>
)
