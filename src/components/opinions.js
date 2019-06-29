import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Arrow from "../images/arrow.svg"

import Opinie from "../data/opinions"

export default class Opinions extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props) {
    super(props)
    this.state = {
      slide: 0,
      length: Opinie.length,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.nextSlide()
    }, 5000)

    this.setState({
      slide: 0,
    })
  }

  nextSlide() {
    let slide = this.state.slide
    slide++

    this.setState({
      slide: slide > this.state.length - 1 ? 0 : slide,
    })
  }

  prevSlide() {
    let slide = this.state.slide
    slide--

    this.setState({
      slide: slide < 0 ? this.state.length - 1 : slide,
    })
  }

  render() {
    return (
      <section className="opinions">
        <div className="opinions__wrapper">
          <img className="opinions__avatar" src={Opinie[this.state.slide].img} />
          <h2 className="subtitle">
            { Opinie[this.state.slide].name }
          </h2>
          <p className="opinions__dsc">
            { Opinie[this.state.slide].dsc }
          </p>
          <nav className="opinions__nav">
            <button className="opinions__button opinions__button--prev" onClick={this.prevSlide.bind(this)}>
              <img src={Arrow} alt="" />
            </button>
            <button className="opinions__button opinions__button--next" onClick={this.nextSlide.bind(this)}>
              <img src={Arrow} alt="" />
            </button>
          </nav>
        </div>
      </section>
    )
  }
}
