import styled from 'styled-components'

import { H3 } from '../../elements/H.js'

const Text = styled(H3)`
  
  transition: 0.8s;
  position: absolute;
  font-weight: 700;

  &.text-exit {
    white-space: nowrap;
    opacity: 0;
    transition: 0.8s;

    &-active{
      opacity: 0;
    }
  }

  &.text-enter {
    transform: translateY(40px);
    opacity: 0;

    &-done {
      transform: translateY(00px);
      opacity: 1;
    }
  }
`;

export default Text;