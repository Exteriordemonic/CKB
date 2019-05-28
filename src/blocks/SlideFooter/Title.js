import styled from 'styled-components'

import { Gutter, Colors } from '../../vendors/variables.js'

const Title = styled.h3`
  color: ${Colors.light};
  font-weight: 700;
  letter-spacing: 1.1px;
  margin-bottom: ${Gutter}px;
`;

export default Title;