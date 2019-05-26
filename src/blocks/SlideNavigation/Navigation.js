import styled from 'styled-components'

import { Gutter } from '../../vendors/variables.js'

import Button from './Button.js'

const Navigation = styled.ul`
  position: absolute;
  bottom: ${Gutter * 5}px;
  left: ${Gutter * 10}px;
  list-style: none;
  display: flex;

  @media (max-width: 1024px) {
    width: calc(100vw - ${Gutter * 10}px);
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
  }

  @media (max-width: 768px) {
    top: unset;
    left: unset;
    right: ${Gutter * 5}px;
    bottom: ${Gutter * 5}px;
    width: 30vw;
  }
`
Navigation.Button = Button;

export default Navigation;