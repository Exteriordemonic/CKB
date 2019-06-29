import React, { Component } from "react"
import { graphql } from "gatsby"
import cookie from "react-cookies"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImagesGrid from "../components/ImagesGrid"

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

        const G1 = this.props.data.Slide1.childImageSharp.fixed;
        const G2 = this.props.data.Slide2.childImageSharp.fixed;
        const G3 = this.props.data.Slide3.childImageSharp.fixed;
        const G4 = this.props.data.Slide4.childImageSharp.fixed;
        const G5 = this.props.data.Slide5.childImageSharp.fixed;
        const G6 = this.props.data.Slide6.childImageSharp.fixed;
        const G7 = this.props.data.Slide7.childImageSharp.fixed;
        const G8 = this.props.data.Slide8.childImageSharp.fixed;
        const G9 = this.props.data.Slide9.childImageSharp.fixed;
        const slider = [G7, G5, G9, G4, G8, G2, G1, G6, G3];

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
                <ImagesGrid images={slider} />
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
    Slide1: file(relativePath: { eq: "wakacje/1.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide2: file(relativePath: { eq: "wakacje/2.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide3: file(relativePath: { eq: "wakacje/3.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide4: file(relativePath: { eq: "wakacje/4.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide5: file(relativePath: { eq: "wakacje/5.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide6: file(relativePath: { eq: "wakacje/6.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide7: file(relativePath: { eq: "wakacje/7.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide8: file(relativePath: { eq: "wakacje/8.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
    Slide9: file(relativePath: { eq: "wakacje/9.jpg" }) {
      childImageSharp {
        fixed(width: 400, quality: 100) {
          base64
          src

        }
      }
    },
  }
`

export default Sila
