import React, { Component } from 'react'

import { TransitionGroup, CSSTransition} from 'react-transition-group'


import Label from '../../blocks/Label'
import SlideNavigation from '../../blocks/SlideNavigation'
import Slider from '../../blocks/Slider'
import Navigation from '../../blocks/Navigation'

import { HeroWrapper } from './styled'

import HeroImg from '../../images/bg-1.jpg'
import HeroImg2 from '../../images/bg-2.jpg'
import HeroImg3 from '../../images/bg-3.jpg'
import SlideFooter from '../../blocks/SlideFooter';

import Slider11 from '../../images/Slider/Slider-1.jpg';
import Slider12 from '../../images/Slider/Slider-2.jpg';
import Slider13 from '../../images/Slider/Slider-3.jpg';

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

const SliderImages = [HeroImg, HeroImg2, HeroImg3];

const SmallSlider = [
  [Slider11, Slider12, Slider13],
  [Slider11, Slider12, Slider13],
  [Slider11, Slider12, Slider13],
]

const SliderContent = [
  [ 
    {title: 'Trening', text: 'Team'},
    {title: 'Cena', text: '150zł'},
    {title: 'Czas trwania', text: '1h'},
  ],
  [ 
    {title: 'Trening', text: 'Personal'},
    {title: 'Cena', text: '90zł'},
    {title: 'Czas trwania', text: '1h'},
  ],
  [ 
    {title: 'Trening', text: 'Duet'},
    {title: 'Cena', text: '120zł'},
    {title: 'Czas trwania', text: '1h'},
  ],
]

const Title = {
  top: 'MCT - Mrągowskie',
  bottom: 'centrum treningowe'
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
      setInterval(() => {
        console.log('Big test data');
        this.nextSlide();
      }, 5000);
    }

    nextSlide() {
      console.log('next slide');
      let slide = this.state.slide;
      slide++;

      // setInterval(this.nextSlide(), 1000);

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
        <HeroWrapper.Title as="span" className="title">
          Bądź  <span className="special">NAJLEPSZĄ</span>   <br /> WERSJĄ SIEBIE
        </HeroWrapper.Title>
        <Navigation />
        
        <Label label={Title} />
        {/* <Slider data={SmallSlider[this.state.slide]} /> */}
        <SlideNavigation prevSlide={this.prevSlide.bind(this)} nextSlide={this.nextSlide.bind(this)}/>
        <SlideFooter data={SliderContent[this.state.slide]} />
      </HeroWrapper>
    )
  }
}
