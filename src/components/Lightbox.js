import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

class Lightbox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener("keyup", this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener("keyup", this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({
      showLightbox: !this.state.showLightbox,
      selectedImage: index,
    })
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
      }
    }
  }

  render() {
    const { images } = this.props
    const { showLightbox, selectedImage } = this.state
    return (
      <Fragment>
        <Gallery>
          {images.map((img, i) => (
            <GalleryItem key={img.node.sizes.src}>
              <a
                href={img.node.sizes.src}
                alt="Car Image"
                onClick={e => this.handleClick(e, i)}
              >
                <StyledImg sizes={img.node.sizes} />
              </a>
            </GalleryItem>
          ))}
        </Gallery>

        <LightboxModal
          visible={showLightbox}
          onKeyUp={e => this.handleKeyDown(e)}
        >
          <LightboxContent onClick={this.closeModal}>
            <Img sizes={images[selectedImage].node.sizes} />
            <Controls>
              <LeftRight>
                <Button onClick={this.goBack} disabled={selectedImage === 0}>
                  <Button onClick={this.closeModal}>Close</Button>
                  Previous
                </Button>
                <Button
                  onClick={this.goForward}
                  disabled={selectedImage === images.length - 1}
                >
                  Next
                </Button>
              </LeftRight>
            </Controls>
          </LightboxContent>
        </LightboxModal>
      </Fragment>
    )
  }
}

const StyledImg = styled(Img)`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  z-index: -1;
  height: 100%; // or whatever
  & > img {
    object-fit: contain !important; // or whatever
    object-position: 0% 0% !important; // or whatever
  }
`

const Gallery = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }
  grid-gap: 0px;
  .gatsby-image-outer-wrapper {
    margin: auto;
    
    width: 100%;
    height: auto;
  }
`

const GalleryItem = styled.div`
  position: relative;
  left: 50%;
  margin-left: -50%;
  margin-right: -50%;
  overflow: hidden;
`

const Button = styled.button`
  margin: auto;
`

const LightboxModal = styled.div`
  position: fixed;
  margin: auto;
  width: 100%;
  top: 0;
  left: 0;
  clear: both;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? "1" : "0")};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
`
const LightboxContent = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  padding: 5px;

  position: fixed;
  overflow: scroll;
  object-fit: contain;
  @media (max-width: 400px) {
    top: 20%;
  }
`

const Controls = styled.div`
  display: none;
  justify-content: center;
`

const LeftRight = styled.div`
  button:first-child {
    margin-right: 10px;
  }
`

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Lightbox
