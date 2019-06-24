import React, { Component } from "react"
import PropTypes from "prop-types"

import Img from "gatsby-image"

import { Link } from "gatsby"

export default class SmallHero extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: "CKB MRĄGOWO",
  }

  render() {
    return (
      <section className={`hero ${this.props.reverse ? `hero--reverse` : ""}`}>
        <Img fixed={this.props.img} className="hero__img" />
        <h1 className="hero__title headline">{this.props.title}</h1>
        <Link className="hero__link subtitle" to="/">
          Powrót do strony głównej
        </Link>
      </section>
    )
  }
}
