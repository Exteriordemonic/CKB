import styled from "styled-components"
import React from "react"
import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"

const Poziom = props => {
  return (
    <PoziomStyled>
      <ContainerStyled>
        <TitleStyled minor>Poziom</TitleStyled>
        <PoziomTitle>ACTIVE</PoziomTitle>
        <PoziomText>
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet
          elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui
          posuere blandit.Mauris blandit aliquet elit, eget tincidunt nibh
          pulvinar a. Nulla porttitor accumsan tincidunt. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet
          quam id dui posuere blandit.
        </PoziomText>
        <LinkStyled>Zapisz sie na zajecia</LinkStyled>
      </ContainerStyled>
    </PoziomStyled>
  )
}

const PoziomStyled = styled.div`
  padding: 100px 0;
`

const PoziomTitle = styled(TitleStyled)`
  margin-top: 40px;
  margin-bottom: 20px;
`

const PoziomText = styled(TextStyled)`
  margin-right: 50%;

  @media (max-width: 768px) {
    margin-right: 20%;
  }

  @media (max-width: 576px){
    margin: 0;
  }
  margin-bottom: 20px;
`


export default Poziom
