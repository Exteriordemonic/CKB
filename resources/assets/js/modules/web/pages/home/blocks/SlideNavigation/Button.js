import styled from 'styled-components'

import { Gutter } from '../../vendors/variables.js'

const Button = styled.button`
  background-color: transparent;
  border: none;
  transform: rotate(${props => props.direction == 'prev' ? '180deg' : 0 });
  margin-right: ${props => props.direction == 'prev' ? Gutter * 10 : 0 }px;
`

export default Button;