import React, { Component } from "react"
import { graphql } from "gatsby"
import cookie from "react-cookies"

import SEO from "../components/seo"
import Layout from "../components/layout"

// import components
import Header from "../common/navigation"
import Hero from "../components/Hero"
import SkewBackground from "../components/SkewBackground"
import About from "../components/About"
import PoziomCardSection from "../components/PoziomCardSection"
import Poziom from "../components/Poziom"
import ImagesGrid from "../components/ImagesGrid"
import Sala from "../components/Sala"

import SalaImg from "../images/hero.jpg"

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      supernav: cookie.load("supernav") === "false" ? false : true,
      card: 1,
    }

    this.selectCardHandle = this.selectCardHandle.bind(this)
  }

  selectCardHandle(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)

    this.setState({
      card: index,
    })
  }

  render() {
    const ckb = this.props.data.ckb.childImageSharp.fixed
    const mct = this.props.data.mct.childImageSharp.fixed
    const kolonia = this.props.data.kolonia.childImageSharp.fixed

    const heroOne = this.props.data.heroOne.childImageSharp.fixed
    const heroTwo = this.props.data.heroTwo.childImageSharp.fixed
    const heroThree = this.props.data.heroThree.childImageSharp.fixed

    const G1 = this.props.data.Slide1.childImageSharp.fixed;
    const G2 = this.props.data.Slide2.childImageSharp.fixed;
    const G3 = this.props.data.Slide3.childImageSharp.fixed;
    const G4 = this.props.data.Slide4.childImageSharp.fixed;
    const G5 = this.props.data.Slide5.childImageSharp.fixed;
    const G6 = this.props.data.Slide6.childImageSharp.fixed;
    const G7 = this.props.data.Slide7.childImageSharp.fixed;
    const G8 = this.props.data.Slide8.childImageSharp.fixed;
    const G9 = this.props.data.Slide9.childImageSharp.fixed;
    const slider = [G7, G5, G9, G4, G8, G2, G1, G6, G3];

    const ss1 = this.props.data.Ss1.childImageSharp.fixed;
    const ss2 = this.props.data.Ss2.childImageSharp.fixed;
    const ss3 = this.props.data.Ss3.childImageSharp.fixed;
    const ss4 = this.props.data.Ss4.childImageSharp.fixed;
    const ss5 = this.props.data.Ss5.childImageSharp.fixed;
    
    const smallSlider = [ss1, ss2, ss3, ss4, ss5, ss4, ss3, ss2, ss1];
    
    const About1 = this.props.data.About1.childImageSharp.fixed;
    const About2 = this.props.data.About2.childImageSharp.fixed;

    const AboutImages = [About1, About2];

    const SalaImg = this.props.data.SalaImg.childImageSharp.fixed;

    return (
      <Layout supernav={this.state.supernav}>
        <SEO
          title="Strona główna"
          keywords={[
            'półkoloenie dla dzieci'
          ]}
        />
        <Header supernav={this.state.supernav} img={[ckb, mct, kolonia]} />
        <Hero img={[heroOne, heroTwo]}  smallSlider={smallSlider}/>
        <About img={AboutImages}/>
        <Sala background={SalaImg} />
        <ImagesGrid images={slider} />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    ckb: file(relativePath: { eq: "ckb.jpg" }) {
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
    mct: file(relativePath: { eq: "mct.jpg" }) {
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
    kolonia: file(relativePath: { eq: "kolonia.jpg" }) {
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
    heroOne: file(relativePath: { eq: "wakacje/hero-1.jpg" }) {
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
    heroTwo: file(relativePath: { eq: "wakacje/hero-2.jpg" }) {
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
    heroThree: file(relativePath: { eq: "hero.jpg" }) {
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
    Slide1: file(relativePath: { eq: "wakacje/1.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide2: file(relativePath: { eq: "wakacje/2.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide3: file(relativePath: { eq: "wakacje/3.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide4: file(relativePath: { eq: "wakacje/4.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide5: file(relativePath: { eq: "wakacje/5.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide6: file(relativePath: { eq: "wakacje/6.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide7: file(relativePath: { eq: "wakacje/7.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide8: file(relativePath: { eq: "wakacje/8.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide9: file(relativePath: { eq: "wakacje/9.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Ss1: file(relativePath: { eq: "tgu/1.jpg" }) {
      childImageSharp {
        fixed(width: 800, quality: 100) {
          base64
          src

        }
      }
    },
    Ss2: file(relativePath: { eq: "tgu/2.jpg" }) {
      childImageSharp {
        fixed(width: 800, quality: 100) {
          base64
          src

        }
      }
    },
    Ss3: file(relativePath: { eq: "tgu/3.jpg" }) {
      childImageSharp {
        fixed(width: 800, quality: 100) {
          base64
          src

        }
      }
    },
    Ss4: file(relativePath: { eq: "tgu/4.jpg" }) {
      childImageSharp {
        fixed(width: 800, quality: 100) {
          base64
          src

        }
      }
    },
    Ss5: file(relativePath: { eq: "tgu/5.jpg" }) {
      childImageSharp {
        fixed(width: 800, quality: 100) {
          base64
          src

        }
      }
    },
    About1: file(relativePath: { eq: "wakacje/wakacje.jpg" }) {
      childImageSharp {
        fixed(width: 800, quality: 100) {
          base64
          src

        }
      }
    },
    About2: file(relativePath: { eq: "wakacje/ferie.jpg" }) {
      childImageSharp {
        fixed(width: 800, quality: 100) {
          base64
          src

        }
      }
    },
    SalaImg: file(relativePath: { eq: "wakacje/sala.jpg" }) {
      childImageSharp {
        fixed(width: 800, quality: 100) {
          base64
          src

        }
      }
    },
  }
`

export default IndexPage
