import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Img from "gatsby-image"

import { ContainerStyled } from "./Container.styled"

export default class Content extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <section className="content">
        <ContainerStyled>
          <div className="content__wrapper">
            <div className="content__col">
              {this.props.children}
            </div>
            <div className="content__col">
              <Img fixed={this.props.img} className="content__img" />
            </div>
          </div>
        </ContainerStyled>
      </section>
    )
  }
}
