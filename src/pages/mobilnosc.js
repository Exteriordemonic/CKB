import React, { Component } from "react"
import { graphql } from "gatsby"

import Header from "../common/navigation"
import Layout from "../components/layout"
import SmallHero from "../components/smallHero"
import Content from "../components/content"

class Mobilnosc extends Component {
  render() {
    const ckb = this.props.data.ckb.childImageSharp.fixed
    const mct = this.props.data.mct.childImageSharp.fixed
    const kolonia = this.props.data.kolonia.childImageSharp.fixed
    const imageOne = this.props.data.imageOne.childImageSharp.fixed
    const imageTwo = this.props.data.imageTwo.childImageSharp.fixed

    return (
      <Layout supernav={false}>
        <Header supernav={false} img={[ckb, mct, kolonia]} />
        <SmallHero title="MOBILNOŚĆ" img={imageOne} reverse />
        <Content img={imageTwo}>
          <h2>MOBILNOŚĆ i ZDROWE STAWY</h2>
          <p className="text">
            Podczas każdych zajęć Studenci poznają elementy mobility skupiające
            się na wybranych stawach lub angażujących całe ciało, są one
            nieodłącznym elementem każdej rozgrzewki. Wykorzystujemy w tym celu
            techniki z odważnikiem (tj. Halo,Arm Bar, Goblet Squat, TGU) lub
            tyczką, jednak znaczną część czasu pracujemy z masą własnego ciała.
          </p>
          <p className="text">
            W ten sposób systematycznie i świadomie dbamy o zdrowie stawów i
            całego aparatu ruchu, pamiętając o tym że człowiek został stworzony
            do tego aby się ruszać.
          </p>
        </Content>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    ckb: file(relativePath: { eq: "ckb.jpg" }) {
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
    mct: file(relativePath: { eq: "mct.jpg" }) {
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
    kolonia: file(relativePath: { eq: "kolonia.jpg" }) {
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
    imageOne: file(relativePath: { eq: "pages/mobilnosc.jpg" }) {
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
    imageTwo: file(relativePath: { eq: "tgu/3.jpg" }) {
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

export default Mobilnosc
