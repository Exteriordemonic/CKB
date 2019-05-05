import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import "../../node_modules/flickity/css/flickity.css"
import "../../node_modules/flickity-fade/flickity-fade.css"
import Flickity from "flickity-fade"

class MinorSlider extends React.Component {
  componentDidMount() {
    new Flickity(".minor-carousel", {
      autoPlay: true,
      fade: true,
      prevNextButtons: false,
      fullscreen: true,
      wrapAround: true,
    })
  }

  render() {
    return (
      <MinorSliderStyled>
        <div className="minor-carousel">
          {this.props.images.map((img, index) => {
            return (
              <div className="carousel-cell" key={index}>
                <img src={img} />
              </div>
            )
          })}
        </div>
      </MinorSliderStyled>
    )
  }
}

MinorSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const MinorSliderStyled = styled.div`
  width: 100%;
  height: 100%;

  .minor-carousel {
    z-index: 2;
    width: 50%;
    height: calc(100% - 130px);
    position: absolute;
    right: 0;
    top: 0;

    .carousel-cell {
      position: relative;
      width: 100%;
      height: 100%;

      img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .flickity-page-dots {
      width: initial;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 20px;

      .dot {
        opacity: 0.6;
        background: transparent;
        border: 1px solid white;
        margin: 4px;
      }

      .dot.is-selected {
        opacity: 0.9;
        background: white;
      }
    }
  }
`

export default MinorSlider
