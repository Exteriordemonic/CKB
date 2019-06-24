import React, { Component } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout"
import Header from "../common/navigation"
import SmallHero from "../components/smallHero"
import Content from "../components/content"

class Energia extends Component {
  render() {
    const ckb = this.props.data.ckb.childImageSharp.fixed
    const mct = this.props.data.mct.childImageSharp.fixed
    const kolonia = this.props.data.kolonia.childImageSharp.fixed
    const imageOne = this.props.data.imageOne.childImageSharp.fixed
    const imageTwo = this.props.data.imageTwo.childImageSharp.fixed

    return (
      <Layout supernav={false}>
        <SEO
          title="Energia"
          keywords={[
            `strongfirst polska`,
            `strongfirst program`,
            `Trening`,
            `sylwetka`,
            `siła`,
            `StrongFirst`,
            `kettlebells`,
            `kettlebell olsztyn`,
            `kettlebell mragowo`,
            `kettlebell swing`,
            `kettlebell hardstyle`,
            `	kettlebell ckb`,
          ]}
        />
        <Header supernav={false} img={[ckb, mct, kolonia]} />
        <SmallHero title="Energia" img={imageOne} reverse />
        <Content img={imageTwo}>
          <h2>Energia</h2>
          <p className="text" style={{ marginBottom: '200px'}}>
            Poznaj moc treningu z odważnikami kulowymi, każda sesja to ogromna
            dawka pozytywnej energii i wzrost poziomu endorfin. Hardstyle
            Kettlebell odmieni Twoje podejście do kwestii treningu i pokaże czym
            jest prawdziwa Siła i Energia.
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
    imageOne: file(relativePath: { eq: "pages/off-energia.jpg" }) {
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
    imageTwo: file(relativePath: { eq: "pages/energia.jpg" }) {
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

export default Energia
