import React, { Component } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout"
import Header from "../common/navigation"
import SmallHero from "../components/smallHero"
import Content from "../components/content"

class Sylwetka extends Component {
  render() {
    const ckb = this.props.data.ckb.childImageSharp.fixed
    const mct = this.props.data.mct.childImageSharp.fixed
    const kolonia = this.props.data.kolonia.childImageSharp.fixed
    const imageOne = this.props.data.imageOne.childImageSharp.fixed
    const imageTwo = this.props.data.imageTwo.childImageSharp.fixed

    return (
      <Layout supernav={false}>
        <SEO
          title="Sylwetka"
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
        <SmallHero title="Sylwetka" img={imageOne} reverse />
        <Content img={imageTwo}>
          <h2>Skuteczne metody spalania tłuszczu</h2>
          <p className="text">
            Ćwiczenia siłowe (DL, GSQ, MP, TGU) połączone z balistycznymi
            technikami z odważnikiem takimi jak Swing i Snatch są jednymi z
            najskuteczniejszych spalaczy tkanki tłuszczowej. ACE (Amerykańska
            Rada ds. Ćwiczeń Fizycznych) zleciła przeprowadzenie badań przez
            Porcari i Schnettler w 2010 roku. Badacze doszli do wniosku, że
            podczas treningu z rwaniem odważnika (snatch), badane osoby spalały
            co najmniej 20,2 kcal na minutę, co przekroczyło wszelkie normy.
          </p>
          <p className="text">
            W 1983 roku Woropajew zbadał i porównał dwie grupy kontrolne w
            czterech testach sprawnościowych: podciąganie na drążku, skok w dal
            z miejsca, sprint 100 m, bieg 1000 m. Grupa pierwsza została poddana
            typowemu przygotowaniu do wymienionych testów, natomiast druga grupa
            wykonywała trening tylko z wykorzystaniem odważników kulowych. Mimo
            tego, że studenci drugiej grupy nie wykonywali żadnego z testowanych
            ćwiczeń osiągnęli w każdym z nich dużo lepsze wyniki niż grupa
            pierwsza.
          </p>
          <p className="text">
            Godzinny trening Hardstyle Kettlebell zawierający w sobie „complexy”
            na dwa odważniki (łączone techniki wykonywane po sobie bez
            odkładania kettli) w znacznym stopniu podniesie efekt EPOC (Excess
            Post-exercise oxygen consumption-czyli nadmierne zużycie tlenu po
            wysiłku) co skutkuje również znacznie większą ilością spalanych
            kalorii w trakcie i po treningu, po to by organizm mógł powrócić do
            stanu równowagi. Takie ćwiczenia z odważnikami wykorzystują i
            kształtują beztlenowe systemy energetyczne, co zwiększa również
            zapotrzebowanie na tlen po ich zakończeniu, zwiększając wspomniany
            efekt EPOC i krótko mówiąc skutecznie redukując nadmiar naszej
            tkanki tłuszczowej.
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
    imageOne: file(relativePath: { eq: "pages/sylwetka.jpg" }) {
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

export default Sylwetka
