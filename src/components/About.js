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
            {" "}
          </TitleStyled>
          <AboutTitle className="title bold">
            Centrum Ketllebell Mrągowo
          </AboutTitle>
          <AboutText className="text">
            CKB Mrągowo to pierwszy w Mrągowie i powiecie klub prowadzący
            zajęcia Hardstyle Kettlebell wg. systemu StrongFirst przez
            Certyfikowanego Instruktora StrongFirst SFG1. Jesteśmy jedyną szkołą
            siły w promieniu 50 km praktykującą trening z odważnikami kulowymi
            według Pavla Tsatsoulina twórcy i założyciela StrongFirst. Tu
            poznasz magię i świat odważników kulowych które potrafią odmienić
            życie każdego w zamian za wytrwałą i systematyczną pracę na
            zajęciach. Zostań studentem siły i dołącz do CKB Mrągowo
          </AboutText>
          <LinkStyled className="subtitle bold" to="/strongfirst">
            Czym jest StrongFirst?
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
    display: none !important;
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
    display: none !important;
  }
`

export default About
