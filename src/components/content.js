import React, { Component } from "react"

import Img from "gatsby-image"

import styled from "styled-components"

export default class Content extends Component {
  render() {
    return (
      <section className="content">
        <div className="container">
          <div className="content__wrapper">
            <div className="content__col">{this.props.children}</div>
            <div className="content__col">
              <Img fixed={this.props.img} className="content__img" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}