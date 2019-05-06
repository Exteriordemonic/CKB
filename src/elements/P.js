import styled from 'styled-components'

import { FontSize } from '../vendors/variables.js'

const P = styled.p`
  font-size: ${FontSize.text.desktop};
  margin: 0;
  padding: 0;
  letter-spacing: 1.1px;

  @media (max-width: 767px) {
    font-size: ${FontSize.text.mobile};
  }
`

export default P;