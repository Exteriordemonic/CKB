import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { colors } from "../styles/variables"
import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"
import PoziomCard from "../components/PoziomCard"

const PoziomCardSection = props => {
  return (
    <ContainerStyled>
      <PoziomCardSectionStyled>
        <PoziomCardStyled title="adept" dni="120" />
        <PoziomCardStyled title="active" dni="120" active/>
        <PoziomCardStyled title="advanced" dni="&" />
      </PoziomCardSectionStyled>
    </ContainerStyled>
  )
}

const PoziomCardSectionStyled = styled.div`
  padding-top: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const PoziomCardStyled = styled(PoziomCard)`
  :nth-of-type(1) {
    position: absolute;
    right: 60%;
  }

  :nth-of-type(2) {
      z-index: 1;
  }

  :nth-of-type(3) {
    position: absolute;
    left: 60%;
  }
`

export default PoziomCardSection
