import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { colors } from "../styles/variables"
import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"

import CKB from "../images/ckb-no-logo.jpg" 
import MCT from "../images/mct-no-logo.jpg" 

const About = props => {
  return (
    <ContainerStyled>
      <AboutStyled>
        <AboutInfo>
          <TitleStyled className="subtitle bold" minor>MCT</TitleStyled>
          <AboutTitle className="title bold">Mrągowskie Centrum Treningowe</AboutTitle>
          <AboutText className="text">
            to kompleksowa oferta rekreacyjno- sportowa, która zaspokoi potrzeby osób w każdym wieku i na każdym poziomie sportowym.
            <br />
            <br />
            Jesteś młodym zawodnikiem sportów drużynowych lub indywidualnych? 
            <br />
            <br />
            Zadbamy o poprawę wszystkich Twoich atrybutów motorycznych, jednocześnie korygując błędne wzorce ruchowe mające wpływ na to jak biegasz lub poruszasz się po boisku. Sprawimy, że będziesz silniejszy, szybszy i wytrzymalszy co przełoży się na szybki progres w Twojej docelowej dyscyplinie.
          </AboutText>
          <LinkStyled className="subtitle bold" as="a" href="tel:+48508378847" >Zadzwoń: +48 508 378 847</LinkStyled>
        </AboutInfo>
        <AboutImages>
          <AboutImage1 src={CKB} />
          <AboutImage2 src={MCT} />
        </AboutImages>
      </AboutStyled>
    </ContainerStyled>
  )
}

const AboutStyled = styled.div`
  padding: 100px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutInfo = styled.div``

const AboutTitle = styled(TitleStyled)`
  margin-top: 40px;
  margin-bottom: 20px;
  text-transform: uppercase;
`

const AboutText = styled(TextStyled)`
  margin-bottom: 60px;
`

const AboutImages = styled.div`
  position: relative;
`

const AboutImage1 = styled.img`
  position: absolute;
  width: 220px;
  height: 300px;
  right: 0;
  top: 0;
  object-fit: cover;
  object-position: center;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`

const AboutImage2 = styled.img`
  position: absolute;
  right: 100px;
  top: 100px;
  width: 220px;
  height: 320px;
  z-index: 3;
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const AboutVideo = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: -100px;
  right: 200px;
  z-index: 4;
  object-fit: cover;
  object-position: top;
`

export default About
