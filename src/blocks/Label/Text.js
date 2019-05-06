import styled from 'styled-components'

import { Gutter, Colors } from '../../vendors/variables.js'

const Text = styled.h1`
  padding: ${Gutter * 4}px;
  background-color: ${Colors.dark};
  color: ${Colors.light};
  padding-right: calc(40vw + ${Gutter * 2}px);
  line-height: 1.5;
  text-transform: uppercase;

  @media (max-width: 1024px) {
   padding:${Gutter * 2}px ${Gutter * 4}px;
  }
`;

export default Text;