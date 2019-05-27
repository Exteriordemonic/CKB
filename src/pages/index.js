import React, { Component } from "react"

import cookie from 'react-cookies'

import Layout from "../components/layout"
import SEO from "../components/seo"

// import components
import Hero from "../components/Hero"
import SkewBackground from "../components/SkewBackground"
import About from "../components/About"
import PoziomCardSection from "../components/PoziomCardSection"
import Poziom from "../components/Poziom"
import ImagesGrid from "../components/ImagesGrid"
import Wiedza from "../components/Wiedza"
import Sala from "../components/Sala"
import Podopieczni from "../components/Podopieczni"

import HeroImage from '../images/ckb.jpg'

import G1 from '../images/gallery/1.jpg'
import G2 from '../images/gallery/2.jpg'
import G3 from '../images/gallery/3.jpg'
import G4 from '../images/gallery/4.jpg'
import G5 from '../images/gallery/5.jpg'
import G6 from '../images/gallery/6.jpg'
import G7 from '../images/gallery/7.jpg'
import G8 from '../images/gallery/8.jpg'
import G9 from '../images/gallery/9.jpg'

import SalaImg from '../images/hero.jpg'

const Images = [G7, G9, G5, G4, G8, G2, G1, G6, G3]

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.selectCardHandle = this.selectCardHandle.bind(this);
  }

  componentWillMount() {
    this.state = {
      supernav: cookie.load('supernav') == 'false' ? false : true,
      card: 1,
    }
  }

  selectCardHandle(e) {
    let index = e.currentTarget.dataset.index;
    console.log(index);

    this.setState({
      card: index
    })
  }

  render() {
    return (
      <Layout supernav={this.state.supernav}>
        <SEO title="Strona główna" keywords={[`strongfirst polska`, `strongfirst program`, `Trening`, `sylwetka`, `siła`, `StrongFirst`, `kettlebells`, `kettlebell olsztyn`, `kettlebell mragowo`, `kettlebell swing`, `kettlebell hardstyle`, `	kettlebell ckb`]} />
        <Hero />
        <SkewBackground>
          <About />
          <PoziomCardSection selectCard={this.selectCardHandle} card={this.state.card} />
          <Poziom card={this.state.card} />
        </SkewBackground>
        <Sala background={SalaImg} />
        <ImagesGrid images={Images} />
      </Layout>
    )
  }
}


export default IndexPage