import React from "react"
import { Link } from "gatsby"

export default () => (
  <header>
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Bangers&display=swap"
        rel="stylesheet"
      />

      <h1>Cesar Emilio Media</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>{" "}
          <li>
            <Link to={"/videos"}>Videos</Link>
          </li>
          <li>
            <Link to={"/photos"}>Photos</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
