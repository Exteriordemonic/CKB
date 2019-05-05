import styled from 'styled-components'

import Ul from '../../elements/Ul.js'

import { Gutter } from '../../vendors/variables.js'

const Navigation = styled(Ul)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  left: ${Gutter * 2}px;
  top: 0;
  bottom: 0;
`

export default Navigation;