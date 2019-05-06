import styled from 'styled-components'

import { Colors, Gutter } from '../../vendors/variables.js'

import SlideFooter from '../../blocks/SlideFooter/Footer.js'
import Slider from '../../blocks/Slider/Slider.js'
import Label from '../../blocks/Label/Text.js'
import Navigation from '../../blocks/Navigation/Navigation.js'

import Title from './Title'

const Index = {
  SlideFooter: 10,
  Label: 20,
  Slider: 30,
  Navigation: 30,
}

const HeroWrapper = styled.section`
  height: 100vh;
  position: relative;

  &:before {
    content: '';
    background-color: ${Colors.dark};
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.6;
    top: 0;
    left: 0;
  }

  ${SlideFooter} {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: ${Index.SlideFooter};
  }

  ${Slider} {
    position: absolute;
    bottom: ${Gutter * 16}px;
    right: 0;
    z-index: ${Index.Slider};

    @media (max-width: 1024px) {
      left: 0;
      margin: 0 auto;
      top: ${Gutter * 45}px;
      bottom: unset;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  ${Label} {
    position: absolute;
    bottom: ${Gutter * 12.4}px;
    right: 0;
    z-index: ${Index.Label};

    @media (max-width: 1024px) {
      bottom: ${Gutter * 11}px;
      z-index: ${Index.Slider + Index.Label};
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  ${Navigation} {
    position: absolute;
    top: ${Gutter * 25}px;
    left: ${Gutter * 14}px;
    z-index: ${Index.Navigation};

    @media (max-width: 768px) {
      z-index: ${Index.Slider + Index.Label};
      left: ${Gutter * 5}px; 
      top: ${Gutter * 13}px;
    }
  }
`
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  transition: 0.8s;

  &.image-exit {
    opacity: 1;
    transition: 0.8s;

    &-active{
      transform: translateY(-40px);
      opacity: 0;
    }
  }

  &.image-enter {
    transform: translateY(40px);
    opacity: 0;

    &-done {
      transform: translateY(00px);
      opacity: 1;
    }
  }
`

HeroWrapper.Title = Title;
HeroWrapper.Image = Image;

export {
  HeroWrapper
}