import styled from 'styled-components'

import { Gutter } from '../../vendors/variables.js'

import Button from './Button.js'

const Navigation = styled.ul`
  position: absolute;
  bottom: ${Gutter * 16}px;
  left: ${Gutter * 10}px;
  list-style: none;
  display: flex;
`
Navigation.Button = Button;

export default Navigation;