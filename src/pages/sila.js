import React, {Component} from "react"

import Layout from "../components/layout"
import SmallHero from '../components/smallHero'
import Content from '../components/content'

import img1 from '../images/tgu/3.jpg' 
import img2 from '../images/tgu/5.jpg' 

import image from '../images/pages/strong.jpg' 

class Sila extends Component {
  render() {
    return(
      <Layout supernav={false}>
        <SmallHero title="DEFINICJA SIŁY" img={image}/>
        <Content img1={img1} img2={img2} >
          <h2>Siła jest umiejętnością</h2>
          <p className="text">
            Siła to fundamentalna zdolność- prof. Leonid Matwiejew twierdzi: “Siła to podstawa rozwoju pozostałych atrybutów fizycznych”. Każdy atleta musi najpierw rozwinąć siłę w podstawowym zakresie, aby móc rozwijać inne cechy motoryczne. Do tego momentu żaden inny aspekt treningu nie jest ważniejszy niż siła.
          </p>
          <p className="text">
            Kształtujemy siłę jako umiejętność i patrzymy na nią i inne atrybuty jak na umiejętność i traktujemy trening jako doskonalenie, a nie powtarzanie ruchów w celu zmęczenia ciała tzw. “zajazdu”. Praktyka nie „workout” jest kluczem do systematycznego kształtowania każdej umiejętności. Strong First kładzie nacisk na doskonałość techniczną vs. intensywność, ale do chwili kiedy technika jest doskonała. “Ćwiczenia, programy, plany treningowe- to wszystko rzeczy o niewielkim znaczeniu, jeżeli technika nie jest perfekcyjna”- były senior instruktor Rob Lawrence.
          </p>
        </Content>
      </Layout>
    )
  }
}


export default Sila