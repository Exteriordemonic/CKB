import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { colors } from "../styles/variables"

const ImagesGrid = ({ images }) => {
  return (
    <ImagesGridStyled>
      <ImagesGridOverlay />
      {images.map((src, index) => {
        return <ImagesGridElement src={src} key={index} />
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

const ImagesGridElement = styled.img`
  object-fit: cover;
  object-position: center;
  min-height: 300px;
  height: 100%;
  width: 100%;

  @media (max-width: 1024px) {
    min-height: 200px;
  }

  :nth-of-type(1) {
    grid-area: a;
  }

  :nth-of-type(2) {
    grid-area: b;
  }

  :nth-of-type(3) {
    grid-area: c;
  }

  :nth-of-type(4) {
    grid-area: d;
  }

  :nth-of-type(5) {
    grid-area: e;
  }

  :nth-of-type(6) {
    grid-area: f;
  }

  :nth-of-type(7) {
    grid-area: g;
  }

  :nth-of-type(8) {
    grid-area: h;
  }

  :nth-of-type(9) {
    grid-area: i;
  }
`

export default ImagesGrid
