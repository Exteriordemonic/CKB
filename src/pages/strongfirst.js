import React, {Component} from "react"

import Layout from "../components/layout"
import SmallHero from '../components/smallHero'
import Content from '../components/content'

import img1 from '../images/tgu/3.jpg' 
import img2 from '../images/tgu/5.jpg' 

import image from '../images/pages/sylwetka.jpg' 

class Strongfirst extends Component {
  render() {
    return(
      <Layout supernav={false}>
        <SmallHero title="Strongfirst" img={image} reverse/>
        <Content img1={img1} img2={img2} >
          <h2>Czym jest StrongFirst</h2>
          <p className="text">
          Jest to system opracowany przez Pavla Tsatsouline’a trenera, który szkolił rosyjskie siły specjalne (SPECNAZ). W latach 90-tych wyemigrował do USA, gdzie rozpropagował trening z odważnikami kulowymi według własnej metody Hardstyle Kettlebell, będącej podstawą systemu i filozofii STRONG FIRST. Pavel bardzo szybko zyskał duży rozgłos za oceanem, a następnie na całym świecie. Wydał tam swoje pierwsze książki, które do dziś są obowiązkową pozycją zagadnień treningu siłowego: “Nagi Wojownik” “Siła dla Ludu” “Wielkie wejście odważników kulowych”. Prestiżowy magazyn Rolling Stone uznał go w tamtym czasie trenerem roku. Od 2010 roku metody Pavla można poznać podczas kursów instruktorskich w Polsce, gdyż w tym roku Dariusz Waluś został wybrany na oficjalnego przedstawiciela Strong First w Naszym kraju. Obecnie mamy w Polsce ponad setkę instruktorów Strong First, którzy reprezentują i przekazują swoim Studentom filozofię SF, opierającą się na kilku głównych filarach:
          </p>
          <h3 className="text bold">
            1. Siła to fundamentalna zdolność
          </h3>
          <p className="text">
          Prof. Leonid Matwiejew twierdzi: “Siła to podstawa rozwoju pozostałych atrybutów fizycznych”. Każdy atleta musi najpierw rozwinąć siłę w podstawowym zakresie, aby móc rozwijać inne cechy motoryczne. Do tego momentu żaden inny aspekt treningu nie jest ważniejszy niż siła.
          </p>

          <h3 className="text bold">
            2. Siła to umiejętność
          </h3>
          <p className="text">
          Patrzymy na siłę i inne atrybuty jak na umiejętność i traktujemy trening jako doskonalenie, a nie powtarzanie ruchów w celu zmęczenia ciała tzw. “zajazdu”. Praktyka jest kluczem do systematycznego kształtowania każdej umiejętności. Strong First kładzie nacisk na doskonałość techniczną vs. intensywność, ale do chwili kiedy technika jest doskonała. “Ćwiczenia, programy, plany treningowe- to wszystko rzeczy o niewielkim znaczeniu, jeżeli technika nie jest perfekcyjna”- były senior instruktor Rob Lawrence.
          </p>
          <h3 className="text bold">
          3. Yin/ Yang - napięcie i rozluźnienie.
          </h3>
          <p className="text">
          Każde ćwiczenie przechodzi przez fazę napięcia i relaksu. Siła/ moc to napięcie natomiast wytrzymałość, szybkość i gibkość wymaga rozluźnienia. System SF pracuje nad osiąganiem obu tych stanów w maksymalnie efektywny sposób.
          </p>
        </Content>
      </Layout>
    )
  }
}


export default Strongfirst