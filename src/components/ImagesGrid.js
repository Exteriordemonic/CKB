import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import { colors } from "../styles/variables"




const ImagesGrid = ({ images }) => {
  return (
    <ImagesGridStyled>
      <ImagesGridOverlay />
      {images.map((src, index) => {
        return (<ImagesGridElement>
          <Img fixed={src} className="grid_image" />
        </ImagesGridElement>)
      })}
    </ImagesGridStyled>
  )
}

ImagesGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
}

const ImagesGridOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${colors.golden};
  opacity: 0.35;
`

const ImagesGridStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "a b b c"
    "a d e e"
    "f g h i";

  @media (max-width: 1024px) {
    grid-template-areas:
      "a i"
      "b b"
      "c d"
      "e e"
      "g h"
      "f f";
  }
`

const ImagesGridElement = styled.div`
  object-fit: cover;
  object-position: center;
  min-height: 300px;
  height: 100%;
  width: 100%;

  .grid_image {
    width: 100%;
    height: 100%;

    &:before {
      content: '';
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;
      background-color: ${colors.golden};
      z-index: 100;
      opacity: 0.5;
    }
  }

  :nth-of-type(2) {
    grid-area: a;
  }

  :nth-of-type(3) {
    grid-area: b;
  }

  :nth-of-type(4) {
    grid-area: c;
  }

  :nth-of-type(5) {
    grid-area: d;
  }

  :nth-of-type(6) {
    grid-area: e;
  }

  :nth-of-type(7) {
    grid-area: f;
  }

  :nth-of-type(8) {
    grid-area: g;
  }

  :nth-of-type(9) {
    grid-area: h;
  }

  :nth-of-type(10) {
    grid-area: i;
  }
`

export default ImagesGrid
