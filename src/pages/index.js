import React, {Component} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import components
import Hero from "../components/Hero"
import SkewBackground from "../components/SkewBackground"
import About from "../components/About"
import PoziomCardSection from "../components/PoziomCardSection"
import Poziom from "../components/Poziom"
import ImagesGrid from "../components/ImagesGrid"
import Sala from "../components/Sala"
import Podopieczni from "../components/Podopieczni"
import References from "../components/references"
import Header from "../common/navigation"
import Wiedza from "../components/Wiedza"

import { Preloader, Placeholder } from 'react-preloading-screen';

import HeroImage from '../images/ckb.jpg'

import G1 from '../images/g-1.jpg'
import G2 from '../images/g-2.jpg'
import G3 from '../images/g-3.jpg'
import G4 from '../images/g-4.jpg'
import G5 from '../images/g-5.jpg'
import G6 from '../images/g-6.jpg'
import G7 from '../images/g-7.jpg'
import G8 from '../images/g-8.jpg'

import SalaImg from '../images/sala.jpg'

const Images = [G7, G2,G3, G4, G5,G6, G1, G8]

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card : 1,
    };
    this.selectCardHandle = this.selectCardHandle.bind(this); 
  }

  selectCardHandle(e) {
    let index = e.currentTarget.dataset.index;
  console.log(index); 

    this.setState({
      card : index
    })
  }

  render() {
    const ckb = this.props.data.ckb.childImageSharp.fixed
    const mct = this.props.data.mct.childImageSharp.fixed
    const kolonia = this.props.data.kolonia.childImageSharp.fixed

    const FbBG = this.props.data.FbBG.childImageSharp.fixed;

    return(
      <Preloader>
        <Layout>
          <SEO title="Strona główna" keywords={[`Przygotowanie motoryczne`, `mazury`, `mragowo`, 'treningi']} />
          <Header supernav={this.state.supernav} img={[ckb, mct, kolonia]} />
          <Hero />
          <SkewBackground>
            <About />
            <PoziomCardSection selectCard={this.selectCardHandle} card={this.state.card} />
            <Poziom card={this.state.card} />
          </SkewBackground>
          <ImagesGrid images={Images}/>
          <SkewBackground>
          <Wiedza />
          <Sala background={SalaImg} />
            <Podopieczni />
          </SkewBackground>
        </Layout>
        <Placeholder>
            <span>Loading...</span>
        </Placeholder>
    </Preloader>
    )
  }
}


export default IndexPage

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
    FbBG: file(relativePath: { eq: "dolacz-do-nas.jpg" }) {
      childImageSharp {
        fixed(width: 800, quality: 100) {
          base64
          src

        }
      }
    },
  }
`