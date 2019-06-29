import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

import { ContainerStyled } from "../components/Container.styled"
import Header from "./sectionHeader"

import fbLogo from '../images/fb-logo.png'
import fbFind from '../images/find-us-fb.jpeg'

export default class References extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <section className="references">
        <ContainerStyled>
          <Header title="DOŁĄCZ " subtitle="DO NAS " />
        </ContainerStyled>
        <ContainerStyled small>
          <div className="references__wrrapper ">
            <div className="references-block">
              <img src={ fbLogo } alt="Logo z facebooka"/>
              <p>
                <span className="title">
                  Cetrum Kettlebell <br />Mrągowo <span className="label text">
                    + 1026
                  </span>
                </span>
              </p>
              <div className="references__footer">
                <a href="https://www.facebook.com/CKBMragowo/">
                  <img src={fbFind} alt="Znajdź i polub nas na facebooku"/>
                </a>
              </div>
            </div>
            <div className="references-block references-block--big">
              <Img className="references-block__bg" fixed={this.props.background} />
            </div>
          </div>
        </ContainerStyled>
      </section>
    )
  }
}
