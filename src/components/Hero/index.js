import React, { Component } from 'react'

import { TransitionGroup, CSSTransition} from 'react-transition-group'


import Label from '../../blocks/Label'
import SlideNavigation from '../../blocks/SlideNavigation'
import Slider from '../../blocks/Slider'
import Navigation from '../../blocks/Navigation'

import { HeroWrapper } from './styled'

import HeroImg from '../../images/kb-1.jpg'
import HeroImg2 from '../../images/kb-3.jpg'
import HeroImg3 from '../../images/hero.jpg'

import SlideFooter from '../../blocks/SlideFooter';

import Slider1 from '../../images/tgu/1.jpg';
import Slider2 from '../../images/tgu/2.jpg';
import Slider3 from '../../images/tgu/3.jpg';
import Slider4 from '../../images/tgu/4.jpg';
import Slider5 from '../../images/tgu/5.jpg';

import Slider21 from '../../images/ckb-1.jpg';
import Slider22 from '../../images/ckb-1.jpg';
import Slider23 from '../../images/ckb-1.jpg';

import Slider31 from '../../images/ckb-1.jpg';
import Slider32 from '../../images/ckb-1.jpg';
import Slider33 from '../../images/ckb-1.jpg';

const SliderImages = [HeroImg, HeroImg3, HeroImg2];

const SmallSlider = [
  [Slider1, Slider2, Slider3, Slider4, Slider5, Slider4, Slider3, Slider2 ],
  [Slider1, Slider2, Slider3, Slider4, Slider5, Slider4, Slider3, Slider2 ],
  [Slider1, Slider2, Slider3, Slider4, Slider5, Slider4, Slider3, Slider2 ],
]

const SliderContent = [
  [ 
    {title: 'Poziom', text: 'Adept'},
    {title: 'Cena', text: '120zł/msc'},
    {title: 'Kiedy', text: 'WT-CZW'},
  ],
  [ 
    {title: 'Poziom', text: 'Activ'},
    {title: 'Cena', text: '120zł/msc'},
    {title: 'Kiedy', text: 'PN-SR-PT'},
  ],
  [ 
    {title: 'Poziom', text: 'Advenced'},
    {title: 'Cena', text: '120zł/msc'},
    {title: 'Kiedy', text: 'PN-SR-PT'},
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

      setInterval(()=> {
        console.log('TEST');
        this.nextSlide();
      }, 5000)

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
