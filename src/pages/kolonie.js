import React, { Component } from "react"
import { graphql } from "gatsby"
import cookie from "react-cookies"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../common/navigation"
import SmallHero from "../components/smallHero"
import Content from "../components/content"

class Sila extends Component {

    constructor(props) {
        super(props)

        this.state = {
            supernav: cookie.load("supernav") === "false" ? false : true,
        }
    }

    render() {
        const ckb = this.props.data.ckb.childImageSharp.fixed
        const mct = this.props.data.mct.childImageSharp.fixed
        const kolonia = this.props.data.kolonia.childImageSharp.fixed
        const imageOne = this.props.data.imageOne.childImageSharp.fixed
        const imageTwo = this.props.data.imageTwo.childImageSharp.fixed

        return (
            <Layout supernav={this.props.supernav}>
                <SEO
                    title="Kolonie"
                    keywords={[
                        'kolonie mrągowo'
                    ]}
                />
                <Header supernav={this.props.supernav} img={[ckb, mct, kolonia]} />
                <SmallHero title="Półkolonie" img={imageOne} />
                <Content img={imageTwo}>
                    <h2>Półkolonie na sportowo</h2>
                    <p className="text">
                        oferta skierowana do dzieci w wieku 6-12 lat. W zależności od pory roku zapraszamy na półkolonie latem pod hasłem SPORTOWE WAKACJE, oraz zimą SPORTOWE FERIE. Wydarzenie organizowane jest przez Mrągowskie Centrum Treningowe i Mrągowskie Stowarzyszenie Rowerowe
                    </p>
                    <p className="text">
                        Dzieci podczas turnusu trwającego 5 dni pozostają pod stałą opieką instruktorów i animatorów w godz. 9.00-15.00. W planie półkolonii  w zależności od pory roku i warunków atmosferycznych znajdują się:
                    </p>
                    <ul>
                        <li className="text">
                            zabawy w kuli wodnej
                        </li>
                        <li className="text">
                            chusta Akson
                        </li>
                        <li className="text">
                            gry i zabawy drużynowe (piłka nożna, koszykówka,siatkówka)
                        </li>
                        <li className="text">
                            wyścigi rzędów w różnych formach
                        </li>
                        <li className="text">
                            podchody i ścieżki edukacyjne w Nadleśnictwie Mrągowo (Św. Lipka, Borowski Las)
                        </li>
                        <li className="text">
                            ognisko, grillowanie
                        </li>
                        <li className="text">
                            zajęcia Mały Wędkarz
                        </li>
                        <li className="text">
                            wycieczki i wyścigi rowerowe
                        </li>
                        <li className="text">
                            Park Linowy
                        </li>
                        <li className="text">
                            mobilne miasteczko rowerowe
                        </li>
                        <li className="text">
                            wycieczka tramwajem wodnym po jeziorze Czos
                        </li>
                        <li className="text">
                            wycieczka do Fermy Jeleniowatych w Kosewie
                        </li>
                    </ul>
                    <br />
                    <br />
                    <ul>
                        <li className="text">
                            sanki i zjazd na jabłuszku
                        </li>
                        <li className="text">
                            łyżwy na lodowisku wraz z zabawami na lodzie
                        </li>
                        <li className="text">
                            kulig i ognisko w Nadleśnictwie Mrągowo
                        </li>
                        <li className="text">
                            wyjazd na basen do Mikołajek lub Mrągowa
                        </li>
                        <li className="text">
                            zajęcia Strong Kids w CKB Mrągowo
                        </li>
                        <li className="text">
                            zabawa w kuli śnieżnej
                        </li>
                        <li className="text">
                            wycieczki objazdowe 
                        </li>
                    </ul>
                </Content>
            </Layout>
        )
    }
}

export const query = graphql`
  query {
    ckb: file(relativePath: { eq: "ckb.jpg" }) {
      childImageSharp {
        fixed(width: 800, height: 920) {
          src
          srcSet
          base64
        }
      }
    }
    mct: file(relativePath: { eq: "mct.jpg" }) {
      childImageSharp {
        fixed(width: 800, height: 920) {
          src
          srcSet
          base64
        }
      }
    }
    kolonia: file(relativePath: { eq: "kolonia.jpg" }) {
      childImageSharp {
        fixed(width: 800, height: 920) {
          src
          srcSet
          base64
        }
      }
    }
    imageOne: file(relativePath: { eq: "wakacje/hero-1.jpg" }) {
      childImageSharp {
        fixed(width: 1920) {
          src
          srcSet
          base64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "wakacje/wakacje.jpg" }) {
      childImageSharp {
        fixed(width: 679) {
          src
          srcSet
          base64
        }
      }
    }
  }
`

export default Sila
