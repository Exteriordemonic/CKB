import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
              <img className="content__img" src={this.props.img1} />
              <img className="content__img content__img--2" src={this.props.img2} />
            </div>
          </div>
        </ContainerStyled>
      </section>
    )
  }
}
