import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { colors } from "../styles/variables"
import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"

const About = props => {
  return (
    <ContainerStyled>
      <AboutStyled>
        <AboutInfo>
          <TitleStyled minor>CZYM JEST</TitleStyled>
          <AboutTitle>CKB Mrągowo</AboutTitle>
          <AboutText>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Nulla quis lorem ut libero malesuada feugiat. Mauris blandit
            aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet
            quam id dui posuere blandit.Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Curabitur aliquet quam id dui posuere blandit.
          </AboutText>
          <LinkStyled>Dowiedz się więcej</LinkStyled>
        </AboutInfo>
        <AboutImages>
          <AboutImage1 src="https://images.unsplash.com/photo-1553467105-bdb9ae8a7eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" />
          <AboutImage2 src="https://images.unsplash.com/photo-1553467105-bdb9ae8a7eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" />
          <AboutVideo src="https://images.unsplash.com/photo-1553467105-bdb9ae8a7eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" />
        </AboutImages>
      </AboutStyled>
    </ContainerStyled>
  )
}

const AboutStyled = styled.div`
  padding: 100px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
`

const AboutVideo = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: -100px;
  left: 0;
  z-index: 4;
  object-fit: cover;
  object-position: center;
`

export default About
