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
import Wiedza from "../components/Wiedza"
import Sala from "../components/Sala"
import Podopieczni from "../components/Podopieczni"

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
    return(
      <Preloader>
        <Layout>
          <SEO title="Strona główna" keywords={[`Przygotowanie motoryczne`, `mazury`, `mragowo`, 'treningi']} />
          <Hero />
          <SkewBackground>
            <About />
            <PoziomCardSection selectCard={this.selectCardHandle} card={this.state.card} />
            <Poziom card={this.state.card} />
          </SkewBackground>
          <ImagesGrid images={Images}/>
          <Wiedza />
          <SkewBackground>
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