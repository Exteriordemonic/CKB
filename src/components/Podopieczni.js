import styled from "styled-components"
import React from "react"

import { TransitionGroup, CSSTransition } from "react-transition-group"

import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"
import Card from "../components/Card"

import C1 from "../images/g-7.jpg"

import Header from "./sectionHeader"

const Podopieczni = ({ card }) => {
  return (
    <PodopieczniStyled>
      <ContainerStyled>
        <Header title="Nasi" subtitle="Podopieczni" />
      </ContainerStyled>
      <ContainerStyled small>
        <CardsContainer>
          <Card
            as="a"
            href="https://facebook.pl"
            title="Aleksander Kwiatek"
            image={C1}
            cover
          >
            Sed porttitor lectus nibh lohda. Donec sollicitudin molestie
            malesuada.
          </Card>
          <Card
            as="a"
            href="https://facebook.pl"
            title="Aleksander Kwiatek"
            image={C1}
            cover
          >
            Sed porttitor lectus nibh lohda. Donec sollicitudin molestie
            malesuada.
          </Card>
          <Card
            as="a"
            href="https://facebook.pl"
            title="Aleksander Kwiatek"
            image={C1}
            cover
          >
            Sed porttitor lectus nibh lohda. Donec sollicitudin molestie
            malesuada.
          </Card>
          <Card
            as="a"
            href="https://facebook.pl"
            title="Aleksander Kwiatek"
            image={C1}
            cover
          >
            Sed porttitor lectus nibh lohda. Donec sollicitudin molestie
            malesuada.
          </Card>
        </CardsContainer>
      </ContainerStyled>
    </PodopieczniStyled>
  )
}

const PodopieczniStyled = styled.section``

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 60px 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export default Podopieczni
