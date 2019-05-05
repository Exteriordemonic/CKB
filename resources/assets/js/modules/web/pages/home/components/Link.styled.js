import styled from "styled-components"
import { colors } from "../styles/variables"

export const LinkStyled = styled.a`
  color: ${props => (props.inverted ? colors.white : colors.black)};
  text-transform: uppercase;
  font-size: 27px;
  border-bottom: 2px solid ${colors.golden};
  font-weight: bold;
  width: fit-content;
  cursor: pointer;
`
