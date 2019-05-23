import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Strong from '../images/sala.jpg'

export default class SmallHero extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: 'CKB MRĄGOWO'
  }

  render() {
    return (
      <section className="hero">
        <img src={Strong} alt="" className="hero__img" />
        <h1 className="hero__title headline">
          {this.props.title}
        </h1>
      </section>
    )
  }
}
