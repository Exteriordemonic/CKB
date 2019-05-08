import styled from "styled-components"
import React from "react"
import { TitleStyled } from "./Title.styled"

const SectionHeader = ({ title, subtitle, isInverted }) => {

  let Title;
  let Subtitle;
  if(title) {
    Title = <SectionTitle as="span" className="subtitle" minor inverted={isInverted} children={title} />
  }

  if(subtitle) {
    Subtitle = <SectionSubtitle as="span" className="title bold" inverted={isInverted} children={subtitle} />
  }

  return (
    <h2>
      {Title}
      {Subtitle}
    </h2>
  )
}

const SectionTitle = styled(TitleStyled)`
  margin-bottom: 60px;
  display: block;
  font-weight: 700;
`

const SectionSubtitle = styled(TitleStyled)`
  margin-bottom: 20px;
  display: block;
`

export default SectionHeader
