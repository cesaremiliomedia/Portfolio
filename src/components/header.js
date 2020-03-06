import React from "react"
import { Link } from "gatsby"

export default () => (
  <header>
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Bangers&display=swap"
        rel="stylesheet"
      />
      <link
        href="//db.onlinewebfonts.com/c/8bd07a0c3254bd96405a228a802b2083?family=flottflott"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      ></link>

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
