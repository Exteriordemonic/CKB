import styled from "styled-components"

import { Gutter } from "../../vendors/variables.js"

const Item = styled.li`
  margin-bottom: ${props => (props.small === true ? 0 : Gutter * 2)}px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin-bottom: ${Gutter}px;
  }
`

export default Item
