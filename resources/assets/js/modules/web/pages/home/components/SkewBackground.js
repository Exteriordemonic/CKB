import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { colors } from "../styles/variables"

const SkewBackground = ({children}) => {
  return (
    <SkewBackgroundStyled>
      {children}
      <SkewBackgroundClippath />
    </SkewBackgroundStyled>
  )
}

const SkewBackgroundStyled = styled.div`
  position: relative;
  background: #E8E8E8;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const SkewBackgroundClippath = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  -webkit-clip-path: polygon(0 70%, 100% 10%, 100% 100%, 0% 100%);
  clip-path: polygon(0 70%, 100% 10%, 100% 100%, 0% 100%);
  background: #e1e1e1;
  z-index: -1;
`

export default SkewBackground
