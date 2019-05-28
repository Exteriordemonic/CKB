import React, { Component } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout"
import Header from "../common/navigation"
import SmallHero from "../components/smallHero"
import Content from "../components/content"

class Wytrzymalosc extends Component {
  render() {
    const ckb = this.props.data.ckb.childImageSharp.fixed
    const mct = this.props.data.mct.childImageSharp.fixed
    const kolonia = this.props.data.kolonia.childImageSharp.fixed
    const imageOne = this.props.data.imageOne.childImageSharp.fixed
    const imageTwo = this.props.data.imageTwo.childImageSharp.fixed

    return (
      <Layout supernav={false}>
        <SEO
          title="Wytrzymałość"
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
        <SmallHero title="WYTRZYMAŁOŚĆ" img={imageOne} />
        <Content img={imageTwo}>
          <h2>Kształtowanie wytrzymałości</h2>
          <p className="text">
            Kształtujemy ją w oparciu o dwie najważniejsze techniki- Swing i
            Snatch, pamiętając o tym że jest to również umiejętność podobnie jak
            siła, więc traktujemy więc ją jako praktykę stosując odpowiednią
            progresję w danych ćwiczeniach.
          </p>
          <p className="text">
            Pozwalamy aby nasz organizm adaptował się do co raz mocniejszego
            bodźca stopniowo zwiększając objętość danego ćwiczenia, czy to
            poprzez liczbę powtórzeń lub czas pracy. Takie podejście pozwala na
            bezpieczne budowanie wytrzymałości i uniknięcie efektu
            przetrenowania lub nawet kontuzji.
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
    imageOne: file(relativePath: { eq: "pages/wytrzymalosc.jpg" }) {
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

export default Wytrzymalosc
