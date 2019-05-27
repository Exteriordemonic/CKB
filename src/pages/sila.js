import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Header from '../common/navigation'
import Layout from "../components/layout"
import SmallHero from '../components/smallHero'
import Content from '../components/content'

class Sila extends Component {
  render() {
    const ckb = this.props.data.ckb.childImageSharp.fixed;
    const mct = this.props.data.mct.childImageSharp.fixed;
    const kolonia = this.props.data.kolonia.childImageSharp.fixed;
    const imageOne = this.props.data.imageOne.childImageSharp.fixed;
    const imageTwo = this.props.data.imageTwo.childImageSharp.fixed;

    return (
      <Layout supernav={false}>
        <Header supernav={false} img={[ckb, mct, kolonia]}/>
        <SmallHero title="DEFINICJA SIŁY" img={imageOne} />
        <Content img={imageTwo}>
          <h2>Siła jest umiejętnością</h2>
          <p className="text">
            Siła to fundamentalna zdolność i podstawa rozwoju pozostałych atrybutów fizycznych.    Kształtujemy ją jako umiejętność traktując trening jako doskonalenie, a nie powtarzanie ruchów w celu zmęczenia ciała tzw. “zajazdu”. Praktyka nie „workout” jest kluczem do systematycznego kształtowania każdej umiejętności.
          </p>
          <p className="text">
            StrongFirst kładzie nacisk na doskonałość techniczną vs. intensywność, ale do chwili kiedy technika jest doskonała. “Ćwiczenia, programy, plany treningowe- to wszystko rzeczy o niewielkim znaczeniu, jeżeli technika nie jest perfekcyjna”- były senior instruktor Rob Lawrence.
          </p>
        </Content>
      </Layout>
    )
  }
}

export const query = graphql`
query {
  ckb: file(relativePath: {eq: "ckb.jpg"}) {
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
  mct: file(relativePath: {eq: "mct.jpg"}) {
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
  kolonia: file(relativePath: {eq: "kolonia.jpg"}) {
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
  imageOne: file(relativePath: {eq: "pages/strong.jpg"}) {
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
  imageTwo: file(relativePath: {eq: "tgu/3.jpg"}) {
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
`


export default Sila