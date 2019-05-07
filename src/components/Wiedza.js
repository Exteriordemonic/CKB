import styled from "styled-components"
import React from "react"
import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import Card from "../components/Card"
import { ContainerStyled } from "../components/Container.styled"

import C1 from '../images/mct.png';

const Wiedza = () => {
  return (
    <WiedzaStyled>
      <ContainerStyled>
        <TitleStyled className="subtitle bold" minor>
          SEKCJA
        </TitleStyled>
        <WiedzaTitle className="title bold">WIEDZY</WiedzaTitle>
      </ContainerStyled>
      <ContainerStyled small>
        <CardsContainer>
          <Card as="a" href="https://facebook.pl"
            title="Facebook"
            image={C1}
          >
           Zapraszamy na nasz funpage na faceboku
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

const WiedzaTitle = styled(TitleStyled)`
  margin-top: 40px;
  margin-bottom: 20px;
`

export default Wiedza
