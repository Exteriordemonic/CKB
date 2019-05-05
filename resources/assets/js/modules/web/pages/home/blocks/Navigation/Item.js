import styled from 'styled-components'

import { Gutter } from '../../vendors/variables.js'

import { H3 } from '../../elements/H'

const Item = styled(H3)`
  margin-bottom: ${Gutter * 2}px;
  text-transform: uppercase;
`

export default Item;