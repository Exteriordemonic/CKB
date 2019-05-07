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

import HeroImage from '../images/ckb.jpg'

const Images = [HeroImage, HeroImage,HeroImage, HeroImage, HeroImage,HeroImage, HeroImage, HeroImage]

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
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero />
        <SkewBackground>
          <About />
          <PoziomCardSection selectCard={this.selectCardHandle} card={this.state.card} />
          <Poziom card={this.state.card} />
        </SkewBackground>
        <ImagesGrid images={Images}/>
        <Wiedza />
        <Sala background={HeroImage} />
      </Layout>
    )
  }
}


export default IndexPage