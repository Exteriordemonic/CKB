import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"

class FadingImages extends React.Component {
  state = {
    interval: null,
    currentImage: 0,
    imagesArray: [],
    isFading: false,
  }

  updateItem = (index, itemAttributes) => {
    this.setState({
      imagesArray: [
        ...this.state.imagesArray.slice(0, index),
        Object.assign({}, this.state.imagesArray[index], itemAttributes),
        ...this.state.imagesArray.slice(index + 1),
      ],
    })
  }

  fadeToNextImage = () => {
    let previousImage = this.state.currentImage

    if (this.state.currentImage < this.state.imagesArray.length - 1) {
      this.setState({ currentImage: this.state.currentImage + 1 })
    } else {
      this.setState({ currentImage: 0 })
    }
    this.updateItem(this.state.currentImage, { isVisible: true })
    this.updateItem(previousImage, { isVisible: false })
  }

  componentDidMount() {
    let imagesArray = this.props.images.map((img, index) => {
      return {
        src: img,
        isVisible: index === this.state.currentImage ? true : false,
      }
    })

    let interval = setInterval(() => {
      this.fadeToNextImage()
    }, this.props.delay)
    this.setState({ imagesArray, interval })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  render() {
    return (
      <FadingImagesStyled fadeToNextImage={this.fadeToNextImage}>
        {this.state.imagesArray.map((img, index) => {
          return (
            <FadingImage
              src={img.src}
              key={index}
              isVisible={img.isVisible}
              transitionTime={this.props.transitionTime}
            />
          )
        })}
      </FadingImagesStyled>
    )
  }
}

const FadingImagesStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
`

const FadingImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: ${props => (props.isVisible ? "1" : "0")};
  transition: opacity ${props => props.transitionTime}ms ease-in-out;
`

FadingImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number.isRequired,
  transitionTime: PropTypes.number.isRequired,
}

export default FadingImages
