import styled from "styled-components"

import { Gutter, Colors } from "../../vendors/variables"

const Title = styled.span`
  position: absolute;
  top: ${Gutter * 14}px;
  left: ${Gutter * 10}px;
  color: ${Colors.light};
  text-transform: uppercase;
  line-height: 1.1;
  font-weight: 900;

  &:before {
    content: "";
    position: absolute;
    background-color: ${Colors.light};
    right: calc(100% + ${Gutter * 4}px);
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: ${Gutter * 1}px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export default Title
