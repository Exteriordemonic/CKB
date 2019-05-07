import styled from "styled-components"
import React from "react"
import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import Card from "../components/Card"
import { ContainerStyled } from "../components/Container.styled"

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
          <Card
            title="Lorem ipsum"
            image="https://images.unsplash.com/photo-1553467105-bdb9ae8a7eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
          >
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui
            posuere blandit.Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a.
          </Card>
          <Card
            title="Lorem ipsum"
            image="https://images.unsplash.com/photo-1553467105-bdb9ae8a7eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
          >
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui
            posuere blandit.Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a.
          </Card>
          <Card
            title="Lorem ipsum"
            image="https://images.unsplash.com/photo-1553467105-bdb9ae8a7eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
          >
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui
            posuere blandit.Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a.
          </Card>
          <Card
            title="Lorem ipsum"
            image="https://images.unsplash.com/photo-1553467105-bdb9ae8a7eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
          >
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui
            posuere blandit.Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a.
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
