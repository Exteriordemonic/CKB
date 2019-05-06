import styled from 'styled-components'

import { FontSize } from '../vendors/variables.js'

const H1 = styled.h1`
  font-size: ${FontSize.heading.desktop};
  margin: 0;
  padding: 0;
  letter-spacing: 5px;
  font-weight: 600;

  @media (max-width: 767px) {
    font-size: ${FontSize.text.mobile};
  }
`

const H2 = styled(H1)`
  font-size: ${FontSize.title.desktop};
  

  @media (max-width: 767px) {
    font-size: ${FontSize.title.mobile};
  }
`
const H3 = styled(H1)`
  font-size: ${FontSize.subtitle.desktop};
  letter-spacing: 1.1px;

  @media (max-width: 767px) {
    font-size: ${FontSize.subtitle.mobile};
  }
`

export  {
  H1,
  H2,
  H3
};