import styled from "styled-components"

import { Gutter } from "../../vendors/variables"

const Brand = styled.div`
  padding: ${Gutter * 1}px ${Gutter * 2}px ${Gutter * 1}px ${Gutter * 10}px;
  background-color: black;

  @media (max-width: 768px) {
    padding-left: ${Gutter * 5}px;
  }
`

export default Brand
