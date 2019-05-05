import styled from 'styled-components'

import Ul from '../../elements/Ul.js'

import Image from './Image.js'
import Navigation from './Navigation.js'
import Button from './Button.js'
import Element from './Element.js'

const Slider = styled(Ul)`
  display: inline-block;
  padding-top: 25vw;
  width: 40vw;
  position: relative;
`

Slider.Image = Image;
Slider.Navigation = Navigation;
Slider.Button = Button;
Slider.Element = Element;

export default Slider;