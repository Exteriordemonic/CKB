import styled from 'styled-components'

import { Gutter, Colors } from '../../vendors/variables.js'

const Text = styled.p`
  
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

  @media(max-width: 768px) {
    color: ${Colors.special};
  }
`;

export default Text;