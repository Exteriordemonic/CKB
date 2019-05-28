import React, { Component } from 'react'

import { TransitionGroup, CSSTransition} from 'react-transition-group'

import Img from "gatsby-image"

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

const SliderImages = [HeroImg, HeroImg2, HeroImg3];

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
    {title: 'Poziom', text: 'Active'},
    {title: 'Cena', text: '120zł/msc'},
    {title: 'Kiedy', text: 'WT-CZW'},
  ],
  [ 
    {title: 'Poziom', text: 'Advanced'},
    {title: 'Cena', text: '160zł/msc'},
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
        length : this.props.img.length
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
          <HeroWrapper.Image>
            <Img fixed={this.props.img[this.state.slide]} />
          </HeroWrapper.Image>
        </CSSTransition>
        </TransitionGroup>
        <HeroWrapper.Title as="span" className="headline">
          HARDSTYLE
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
