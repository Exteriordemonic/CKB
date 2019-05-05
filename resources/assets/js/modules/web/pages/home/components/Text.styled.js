import styled from "styled-components"
import { colors } from "../styles/variables"

export const TextStyled = styled.p`
  font-size: 16px;
  color: ${props => (props.inverted ? colors.white : colors.black)};
`
