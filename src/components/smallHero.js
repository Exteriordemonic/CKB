import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from "gatsby"

export default class SmallHero extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: 'CKB MRĄGOWO'
  }

  render() {
    return (
      <section className={`hero ${this.props.reverse ? `hero--reverse` : ''}`}>
        <img src={this.props.img} alt="" className="hero__img" />
        <h1 className="hero__title headline">
          {this.props.title}
        </h1>
        <Link className="hero__link subtitle" to="/">Powrót do storny głównej</Link>
      </section>
    )
  }
}
