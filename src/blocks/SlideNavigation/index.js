import React, { Component } from 'react'

import Arrow from '../../images/arrow.svg'

import Navigation from './Navigation'

class SlideNavigation extends Component {
  render() {
    return (
      <Navigation>
        <li>
          <Navigation.Button direction="prev" onClick={this.props.prevSlide}>
            <img src={Arrow} alt=""/>
          </Navigation.Button>
        </li>
        <li>
          <Navigation.Button onClick={this.props.nextSlide}>
            <img src={Arrow} alt=""/>
          </Navigation.Button>
        </li>
      </Navigation>
    )
  }
}

export default SlideNavigation;