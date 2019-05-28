import styled from "styled-components"

import Ul from "../../elements/Ul.js"

import { Gutter } from "../../vendors/variables"

const List = styled(Ul)`
  display: grid;
  width: 40vw;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    width: 100vw;
    padding: 0 ${Gutter * 5}px;
    grid-template-columns: 1fr;
    grid-gap: ${Gutter * 5}px;
  }
`

export default List
