import React, { Component } from 'react'

import { TransitionGroup, CSSTransition} from 'react-transition-group'


import Label from '../../blocks/Label'
import SlideNavigation from '../../blocks/SlideNavigation'
import Slider from '../../blocks/Slider'
import Navigation from '../../blocks/Navigation'

import { HeroWrapper } from './styled'

import HeroImg from '../../images/bg-1.jpg'
import HeroImg2 from '../../images/bg-2.jpg'
import HeroImg3 from '../../images/hero-3.jpg'
import SlideFooter from '../../blocks/SlideFooter';

import Slider11 from '../../images/slider-e-1.jpg';
import Slider12 from '../../images/slider-1-2.jpg';
import Slider13 from '../../images/slider-1-3.jpg';
import Slider14 from '../../images/slider-e-4.jpg';
import Slider15 from '../../images/slider-e-5.jpg';

import Slider21 from '../../images/slider-2-1.jpg';
import Slider22 from '../../images/slider-2-2.jpg';
import Slider23 from '../../images/slider-2-3.jpg';
import Slider24 from '../../images/slider-2-4.jpg';
import Slider25 from '../../images/slider-2-5.jpg';

import Slider31 from '../../images/slider-e-3.jpg';
import Slider32 from '../../images/slider-e-10.jpg';
import Slider33 from '../../images/slider-e-8.jpg';
import Slider34 from '../../images/slider-e-6.jpg';
import Slider35 from '../../images/slider-e-7.jpg';

const SliderImages = [HeroImg, HeroImg2, HeroImg];

const SmallSlider = [
  [Slider11, Slider12, Slider13, Slider14, Slider15],
  [Slider21, Slider22, Slider23, Slider24, Slider25],
  [Slider31, Slider32, Slider33, Slider34, Slider35],
]

const SliderContent = [
  [ 
    {title: 'Trening', text: 'Team'},
    {title: 'Cena', text: '120zł'},
    {title: 'Czas trwania', text: '1h'},
  ],
  [ 
    {title: 'Trening', text: 'Personal'},
    {title: 'Cena', text: '100zł'},
    {title: 'Czas trwania', text: '1h'},
  ],
  [ 
    {title: 'Trening', text: 'Duo'},
    {title: 'Cena', text: '50zł/os'},
    {title: 'Czas trwania', text: '1h'},
  ],
]

const Title = {
  top: 'Centrum Kettlebell',
  bottom: 'Mrągowo'
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
          HARD STYLE
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
