import styled from 'styled-components'

import { Gutter, Colors } from '../../vendors/variables.js'

import List from './List.js'
import Label from './Label.js'
import Text from './Text.js'
import Title from './Title.js'

const Footer = styled.footer`
  display: inline-block;
  background-color: ${Colors.special};
  padding: ${Gutter * 5}px ${Gutter * 3}px ${Gutter * 5}px ${Gutter * 14}px;

  @media (max-width: 768px) {
    padding: ${Gutter * 5}px 0;
    background: transparent;
  }
`

Footer.List = List;
Footer.Label = Label;
Footer.Text = Text;
Footer.Title = Title;

export default Footer;