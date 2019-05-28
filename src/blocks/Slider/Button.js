import styled from "styled-components"

import { Gutter, Colors } from "../../vendors/variables.js"

const Button = styled.button.attrs(({ active }) => ({
  // or we can define dynamic ones
  background: active ? Colors.light : "transparent",
}))`
  width: ${Gutter * 1.5}px;
  height: ${Gutter * 1.4}px;
  border-radius: 100%;
  border: ${Gutter * 0.1}px solid ${Colors.light};
  background-color: ${props => props.background};
`

export default Button
