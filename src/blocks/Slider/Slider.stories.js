import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from '@storybook/addon-knobs';
import styled from 'styled-components'

import Slide from './index'
import Slider from './Slider'

import "../../components/layout.css"

const Container = styled.div`
display: flex;
justify-content: center;
  ${Slider} {
    max-width: 600px;
  }
`

const stories = storiesOf('Blocks/Slider', module)

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return ( 
    <Container>
      <Slide/>
    </Container>
  )
})