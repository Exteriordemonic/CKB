import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from '@storybook/addon-knobs';
import styled from 'styled-components'

import Label from './index'
import Text from './Text'

import "../../components/layout.css"

const Container = styled.div`
  ${Text} {
    display: inline-block;
  }
`

const stories = storiesOf('Blocks/Label', module)

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const top = text('Top', 'Hellow');
  const bottom = text('Bottom', 'Gatsby Boss!!');

  const label = {
    top: top,
    bottom: bottom
  }

  return ( 
    <Container>
      <Label label={label} />
    </Container>
  )
})