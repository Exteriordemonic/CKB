import React, { Component } from "react"
import PropTypes from "prop-types"

import Img from 'gatsby-image'

import { CSSTransition, TransitionGroup } from "react-transition-group"

import Slider from "./Slider.js"

export default class Slide extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      length: this.props.smallSlider.length,
    }

    this.changeSlide = this.changeSlide.bind(this)
  }

  componentDidMount() {
    setInterval(() => {
      console.log("TEST 2")
      this.nextSlide()
    }, 2000)
  }

  static propTypes = {
    data: PropTypes.any,
  }

  changeSlide(e) {
    this.setState({
      current: e.target.getAttribute("data-index"),
    })
  }

  nextSlide() {
    let current = this.state.current
    current++

    this.setState({
      current: current > this.state.length - 1 ? 0 : current,
    })
  }

  render() {
    return (
      <Slider>
        <TransitionGroup className="image-wrapper">
          <CSSTransition
            classNames="image"
            key={this.props.data[this.state.current]}
            timeout={{ enter: 0, exit: 800 }}
          >
            <Slider.Image src={this.props.data[this.state.current]} >
              <Img fixed={this.props.smallSlider[this.state.current]} />
            </Slider.Image>
          </CSSTransition>
        </TransitionGroup>
        {/* <Slider.Navigation>
          {this.props.data.map((elem, index) => {
            return(
              <Slider.Element key={index}>
                <Slider.Button 
                  active={ this.state.current == index ? true : false } 
                  onClick={ this.changeSlide }
                  data-index={index}
                />
              </Slider.Element>
            )
          })}
        </Slider.Navigation> */}
      </Slider>
    )
  }
}
