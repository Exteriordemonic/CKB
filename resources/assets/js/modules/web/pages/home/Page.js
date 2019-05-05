import React, { Component } from "react"
import PropTypes from "prop-types"

// import components
import Hero from "./components/Hero"

// import services
import { articleListRequest } from "../../../article/service"

// Artur import
import Footer from "./components/Footer"
import { ContainerStyled } from "./components/Container.styled"
import gym from "./images/gym.jpg"
import ImagesGrid from "./components/ImagesGrid"
import Sala from "./components/Sala"
import Wiedza from "./components/Wiedza"
import Poziom from "./components/Poziom"
import SkewBackground from "./components/SkewBackground"
import About from "./components/About"
import PoziomCardSection from "./components/PoziomCardSection"


class Page extends Component {
  static displayName = "HomePage"
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(articleListRequest({ url: '/articles/published' }))
  }

  render() {
    return <div>
      <Hero />
      <SkewBackground>
        <About />
        <PoziomCardSection />
        <Poziom />
      </SkewBackground>
      <ImagesGrid images={[gym, gym, gym, gym, gym, gym, gym, gym]} />
      <Wiedza />
      <ContainerStyled small>
        <Sala background={gym} />
      </ContainerStyled>

    <Footer />
    </div>
  }
}

export default Page
