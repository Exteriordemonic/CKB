import styled from "styled-components"
import React from "react"

import Img from 'gatsby-image'

import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"


import CKB from "../images/kb-2.jpg"
import MCT from "../images/kb-3.jpg"

const About = props => {
  return (
    <ContainerStyled>
      <AboutStyled>
        <AboutInfo>
          <TitleStyled className="subtitle bold" minor>
            Półkolonie
          </TitleStyled>
          <AboutTitle className="title bold">
            na sportowo
          </AboutTitle>
          <AboutText className="text">
            Oferta skierowana do dzieci w wieku 6-12 lat. W zależności od pory roku zapraszamy na półkolonie latem pod hasłem SPORTOWE WAKACJE, oraz zimą SPORTOWE FERIE. Wydarzenie organizowane jest przez Mrągowskie Centrum Treningowe i Mrągowskie Stowarzyszenie Rowerowe.
          </AboutText>
          <LinkStyled className="subtitle bold" to="/kolonie">
            Dowiedz się więcej
          </LinkStyled>
        </AboutInfo>
        <AboutImages>
          <AboutImage1 fixed={props.img[0]} />
          <AboutImage2 fixed={props.img[1]} />
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

const AboutImage1 = styled(Img)`
  position: absolute !important;
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

const AboutImage2 = styled(Img)`
  position: absolute !important;
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

export default About
