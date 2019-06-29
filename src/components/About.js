import styled from "styled-components"
import React from "react"

import Img from 'gatsby-image'

import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"


import CKB from "../images/kb-2.jpg"
import LOGOS from "../images/logos.png"

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
            <img src={LOGOS} />
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

  img {
    margin-top: 60px;
    max-width: 100%;
  }
`

const AboutImages = styled.div`
  position: relative;
`

const AboutImage1 = styled(Img)`
  position: relative !important;
  width: 400px;
  height: 600px;
  left: 10%;
  top: 0;
  object-fit: cover;
  object-position: center;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    & + .gatsby-image-wrapper {
      z-index: 1000;
      transform: scale(1);
      right: calc(10% + 102px);
      opacity: 1;
    }
  }
`

const AboutImage2 = styled(Img)`
  position: absolute !important;
  right: 10%;
  top: 0;
  width: 400px;
  height: 600px;
  z-index: 3;
  object-fit: cover;
  object-position: center;
  transform: scale(0.8);
  transition: 0.4s;
  pointer-events: none;
  opacity: 0;

  @media (max-width: 768px) {
    display: none;
  }
`

export default About
