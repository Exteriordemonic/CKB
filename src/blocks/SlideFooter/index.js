import React, { Component } from "react"
import PropTypes from "prop-types"

import { CSSTransition, TransitionGroup } from "react-transition-group"

import Footer from "./Footer.js"

export default class SlideFooter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animation: false,
      hovering: false,
    }
  }

  static propTypes = {
    data: PropTypes.any,
  }

  componentDidMount() {
    console.log(this.props.data)
  }

  render() {
    return (
      <Footer baseClassName="Score" animationClassName="Score--bounce">
        <Footer.List>
          {this.props.data.map((elem, i) => {
            return (
              <Footer.Label key={i}>
                <Footer.Title as="h3" className="text">
                  {elem.title}
                </Footer.Title>
                <TransitionGroup component="span" className="count">
                  <CSSTransition
                    classNames="text"
                    key={elem.text}
                    timeout={{ enter: 400, exit: 800 }}
                  >
                    <Footer.Text as="p" className="subtitle bold">
                      {elem.text}
                    </Footer.Text>
                  </CSSTransition>
                </TransitionGroup>
              </Footer.Label>
            )
          })}
        </Footer.List>
      </Footer>
    )
  }
}
