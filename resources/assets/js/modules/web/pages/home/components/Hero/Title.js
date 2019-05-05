import styled from 'styled-components'

import { Gutter, Colors } from '../../vendors/variables'

import { H1 } from '../../elements/H'

const Title = styled(H1)`
  position: absolute;
  top: ${Gutter * 14}px;
  left: ${Gutter * 10}px;
  color: ${Colors.light};
  text-transform: uppercase;

  &:before {
    content: '';
    position: absolute;
    background-color: ${Colors.light};
    right: calc( 100% + ${Gutter * 4}px );
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: ${Gutter * 1}px;
  }
`

export default Title;