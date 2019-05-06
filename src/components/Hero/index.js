import React, { Component } from 'react'

import { TransitionGroup, CSSTransition} from 'react-transition-group'


import Label from '../../blocks/Label'
import SlideNavigation from '../../blocks/SlideNavigation'
import Slider from '../../blocks/Slider'
import Navigation from '../../blocks/Navigation'

import { HeroWrapper } from './styled'

import HeroImg from '../../images/hero.jpg'
import HeroImg2 from '../../images/hero-2.jpg'
import HeroImg3 from '../../images/hero-3.jpg'
import SlideFooter from '../../blocks/SlideFooter';

const SliderImages = [HeroImg, HeroImg2, HeroImg3];

const SmallSlider = [
  [HeroImg, HeroImg2, HeroImg3],
  [HeroImg, HeroImg2, HeroImg3],
  [HeroImg, HeroImg2, HeroImg3],
]

const SliderContent = [
  [ 
    {title: 'Cel', text: 'Technika'},
    {title: 'Poziom', text: 'Adept'},
    {title: 'Czas trwania', text: '120 dni'},
  ],
  [ 
    {title: 'Cel', text: 'Sylwetka'},
    {title: 'Poziom', text: 'Activ'},
    {title: 'Czas trwania', text: '120 dni'},
  ],
  [ 
    {title: 'Cel', text: 'Siła'},
    {title: 'Poziom', text: 'Advenced'},
    {title: 'Czas trwania', text: 'Whole life'},
  ],
]

const Title = {
  top: 'CKB Mrągowo',
  bottom: 'trening kettlebell'
}

export default class Hero extends Component {
    constructor(props) {
      super(props);
      this.state = {
        slide : 0,
        length : SliderImages.length
      };
    }

    componentDidMount() {
      this.setState({
        slide: 0,
      });
    }

    nextSlide() {
      let slide = this.state.slide;
      slide++;

      this.setState({
        slide : slide > this.state.length - 1 ? 0 : slide
      })
    }

    prevSlide() {
      let slide = this.state.slide;
      slide--;

      this.setState({
        slide : slide < 0 ? this.state.length - 1 : slide
      })
    }
    
  
  
  render() {
    return (
      <HeroWrapper>
        <TransitionGroup className="image-wrapper">
        <CSSTransition 
            classNames="image" 
            key={SliderImages[this.state.slide]} 
            timeout={{enter: 0, exit:800}}
        >
            <HeroWrapper.Image src={SliderImages[this.state.slide]} alt=""/>
        </CSSTransition>
        </TransitionGroup>
        <HeroWrapper.Title as="span" className="headline">
          Hard style
        </HeroWrapper.Title>
        <Navigation />
        
        <Label label={Title} />
        <Slider data={SmallSlider[this.state.slide]} />
        <SlideNavigation prevSlide={this.prevSlide.bind(this)} nextSlide={this.nextSlide.bind(this)}/>
        <SlideFooter data={SliderContent[this.state.slide]} />
      </HeroWrapper>
    )
  }
}
