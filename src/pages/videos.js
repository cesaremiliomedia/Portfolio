import React from "react"

import Layout2 from "../components/layout2"
import SEO from "../components/seo"
import Video from "../components/video"
import { Spring } from "react-spring/renderprops"
const SecondPage = () => (
  <Layout2>
    <SEO title="Videos" />

    <h1>Videography</h1>
    <div>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1100, duration: 1000 }}
      >
        {props => (
          <ul style={props}>
            <li className="videos">
              <Video
                videoSrcURL="https://player.vimeo.com/video/365942198"
                videoTitle="Official Music Video on YouTube"
              />
            </li>
            <li className="videos">
              <Video
                videoSrcURL="https://player.vimeo.com/video/355282322"
                videoTitle="Official Music Video on YouTube"
              />
            </li>
            <li className="videos">
              <Video
                videoSrcURL="https://player.vimeo.com/video/332098006"
                videoTitle="Official Music Video on YouTube"
              />
            </li>
            <li className="videos">
              <Video
                videoSrcURL="https://player.vimeo.com/video/320889549"
                videoTitle="Official Music Video on YouTube"
              />
            </li>
            <li className="videos">
              <Video
                videoSrcURL="https://player.vimeo.com/video/316364760"
                videoTitle="Official Music Video on YouTube"
              />
            </li>
            <li className="videos">
              <Video
                videoSrcURL="https://player.vimeo.com/video/316739025"
                videoTitle="Official Music Video on YouTube"
              />
            </li>
          </ul>
        )}
      </Spring>
    </div>
  </Layout2>
)

export default SecondPage
