import React, {Component} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import components
import Hero from "../components/Hero"
import SkewBackground from "../components/SkewBackground"
import About from "../components/About"
import PoziomCardSection from "../components/PoziomCardSection"
import Poziom from "../components/Poziom"

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card : 0,
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
        </SkewBackground>
      </Layout>
    )
  }
}


export default IndexPage