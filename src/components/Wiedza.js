import styled from "styled-components"
import React from "react"
import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import Card from "../components/Card"
import { ContainerStyled } from "../components/Container.styled"

import Header from "./sectionHeader"

import C1 from "../images/wakacje/kamil.jpg"
import C2 from "../images/wakacje/radoslaw.jpg"

const Wiedza = () => {
  return (
    <WiedzaStyled>
      <ContainerStyled>
        <Header title="Zespół" subtitle="Nasza kadra" />
      </ContainerStyled>
      <ContainerStyled small>
        <CardsContainer>
          <Card
            as="a"
            href="https://www.facebook.com/CKBMragowo/"
            title="Kamil Kwiatek"
            image={C1}
          >
            Kierownik Półkolonii
            <br />
            <br />
            <a href="tel:508378847">📞 508 378 847</a>
          </Card>
          <Card
            as="a"
            href="https://www.facebook.com/CKBMragowo/"
            title="Radosław Parzych"
            image={C2}
          >
            główny opiekun/instruktor
            <br />
            <br />
            <a href="tel:505130326">📞 505 130 326</a>
          </Card>
        </CardsContainer>
      </ContainerStyled>
    </WiedzaStyled>
  )
}

const WiedzaStyled = styled.section`
  margin: 100px 0;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  padding: 60px 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const WiedzaTitle = styled(TitleStyled)`
  margin-top: 40px;
  margin-bottom: 20px;
`

export default Wiedza
