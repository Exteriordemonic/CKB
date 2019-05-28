import React, { Component } from "react"
import { graphql } from "gatsby"
import cookie from 'react-cookies'

import Layout from "../components/layout"
import SEO from "../components/seo"

// import components
import Header from '../common/navigation'
import Hero from "../components/Hero"
import SkewBackground from "../components/SkewBackground"
import About from "../components/About"
import PoziomCardSection from "../components/PoziomCardSection"
import Poziom from "../components/Poziom"
import ImagesGrid from "../components/ImagesGrid"
import Sala from "../components/Sala"

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

    this.state = {
      supernav: cookie.load('supernav') === 'false' ? false : true,
      card: 1,
    }

    this.selectCardHandle = this.selectCardHandle.bind(this);
  }

  selectCardHandle(e) {
    let index = e.currentTarget.dataset.index;
    console.log(index);

    this.setState({
      card: index
    })
  }

  render() {
    const ckb = this.props.data.ckb.childImageSharp.fixed;
    const mct = this.props.data.mct.childImageSharp.fixed;
    const kolonia = this.props.data.kolonia.childImageSharp.fixed;

    const heroOne = this.props.data.heroOne.childImageSharp.fixed;
    const heroTwo = this.props.data.heroTwo.childImageSharp.fixed;
    const heroThree = this.props.data.heroThree.childImageSharp.fixed;

    return (
      <Layout supernav={this.state.supernav}>
        <SEO title="Strona główna" keywords={[`strongfirst polska`, `strongfirst program`, `Trening`, `sylwetka`, `siła`, `StrongFirst`, `kettlebells`, `kettlebell olsztyn`, `kettlebell mragowo`, `kettlebell swing`, `kettlebell hardstyle`, `	kettlebell ckb`]} />
        <Header supernav={this.state.supernav} img={[ckb, mct, kolonia]}/>
        <Hero img={[heroOne, heroTwo, heroThree]} />
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

export const query = graphql`
query {
  ckb: file(relativePath: {eq: "ckb.jpg"}) {
    childImageSharp {
      fixed(width: 800) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  },
  mct: file(relativePath: {eq: "mct.jpg"}) {
    childImageSharp {
      fixed(width: 800) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  },
  kolonia: file(relativePath: {eq: "kolonia.jpg"}) {
    childImageSharp {
      fixed(width: 800) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  },
  heroOne: file(relativePath: {eq: "kb-1.jpg"}) {
    childImageSharp {
      fixed(width: 1920) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  },
  heroTwo: file(relativePath: {eq: "kb-3.jpg"}) {
    childImageSharp {
      fixed(width: 1920) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  },
  heroThree: file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      fixed(width: 1920) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  }
}
`;


export default IndexPage