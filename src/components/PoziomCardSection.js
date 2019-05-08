import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { colors } from "../styles/variables"
import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"
import PoziomCard from "../components/PoziomCard"

const PoziomCardSection = ({selectCard, card}) => {
  return (
    <ContainerStyled>
      <PoziomCardSectionStyled>
        <PoziomCardStyled onClick={selectCard} data-index="0" title="Adept" dni="120" active={card == 0 ? true : false} />
        <PoziomCardStyled onClick={selectCard} data-index="1" title="Activ" dni="120" active={card == 1 ? true : false} />
        <PoziomCardStyled onClick={selectCard} data-index="2" title="Advanced" dni="120" active={card == 2 ? true : false} />
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

  max-width: 1200px;
  margin: 0 auto;

  @media(max-width: 768px) {
    display: none;
  }
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
