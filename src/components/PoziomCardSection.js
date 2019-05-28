import styled from "styled-components"
import React from "react"
import { colors } from "../styles/variables"
import { ContainerStyled } from "../components/Container.styled"
import PoziomCard from "../components/PoziomCard"

const PoziomCardSection = ({ selectCard, card }) => {
  return (
    <ContainerStyled>
      <PoziomCardSectionStyled>
        <PoziomCardStyled
          onClick={selectCard}
          data-index="0"
          title="Adept"
          extra="zł/msc"
          dni="120"
          active={card === "0" ? true : false}
        />
        <PoziomCardStyled
          onClick={selectCard}
          data-index="1"
          title="Activ"
          extra="zł/msc"
          dni="120"
          active={card === "1" ? true : false}
        />
        <PoziomCardStyled
          onClick={selectCard}
          data-index="2"
          title="Advanced"
          extra="zł/msc"
          dni="160"
          active={card === "2" ? true : false}
        />
        <PoziomCardStyled
          onClick={selectCard}
          data-index="3"
          title="Presonal"
          extra="zł/h"
          dni="100"
          active={card === "3" ? true : false}
        />
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

  @media (max-width: 768px) {
    display: none;
  }
`

const PoziomCardStyled = styled(PoziomCard)`
  position: relative;

  &:nth-child(1) {
    background: #707070cc;
  }
  &:nth-child(2) {
    background: #707070b3;
  }
  &:nth-child(3) {
    background: #70707099;
  }
  &:nth-child(4) {
    background: #70707080;
  }
  background: ${props => (props.active ? colors.black + " !important" : " ")};

  box-shadow: ${props =>
    props.active
      ? "1px 10px 20px 0px rgba(0,0,0,0.4)"
      : "1px 10px 20px 0px rgba(0,0,0,0)"};
  transform: ${props => (props.active ? "scale(1.2) !important" : "scale(1)")};
  z-index: ${props => (props.active ? "100" : "")};
`

export default PoziomCardSection
