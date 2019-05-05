import styled from 'styled-components'

import { Gutter, Colors } from '../../vendors/variables.js'

import { H2 } from '../../elements/H.js'

const Text = styled(H2)`
  padding: ${Gutter * 4}px;
  background-color: ${Colors.dark};
  color: ${Colors.light};
  padding-right: calc(40vw + ${Gutter * 2}px);
  line-height: 1.5;
  text-transform: uppercase;
`;

export default Text;