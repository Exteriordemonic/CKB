import React, {Component} from "react"

import Layout from "../components/layout"
import SmallHero from '../components/smallHero'
import Content from '../components/content'

import img1 from '../images/tgu/3.jpg' 
import img2 from '../images/tgu/5.jpg' 

import image from '../images/pages/sylwetka.jpg' 

class Sylwetka extends Component {
  render() {
    return(
      <Layout supernav={false}>
        <SmallHero title="Sylwetka" img={image} reverse/>
        <Content img1={img1} img2={img2} >
          <h2>Skuteczne metody spalania tłuszczu</h2>
          <p className="text">
          Ćwiczenia siłowe (DL, GSQ, MP, TGU) połączone z balistycznymi technikami z odważnikiem takimi jak Swing i Snatch są jednymi z najskuteczniejszych spalaczy tkanki tłuszczowej. ACE (Amerykańska Rada ds. Ćwiczeń Fizycznych) zleciła przeprowadzenie badań przez Porcari i Schnettler w 2010 roku. Badacze doszli do wniosku, że podczas treningu z rwaniem odważnika (snatch), badane osoby spalały co najmniej 20,2 kcal na minutę, co przekroczyło wszelkie normy. 
          </p>
          <p className="text">
          W 1983 roku Woropajew zbadał i porównał dwie grupy kontrolne w czterech testach sprawnościowych: podciąganie na drążku, skok w dal z miejsca, sprint 100 m, bieg 1000 m. Grupa pierwsza została poddana typowemu przygotowaniu do wymienionych testów, natomiast druga grupa wykonywała trening tylko z wykorzystaniem odważników kulowych. Mimo tego, że studenci drugiej grupy nie wykonywali żadnego z testowanych ćwiczeń osiągnęli w każdym z nich dużo lepsze wyniki niż grupa pierwsza. 
          </p>
          <p className="text">
          Godzinny trening Hardstyle Kettlebell zawierający w sobie „complexy” na dwa odważniki (łączone techniki wykonywane po sobie bez odkładania kettli) w znacznym stopniu podniesie efekt EPOC (Excess Post-exercise oxygen consumption-czyli nadmierne zużycie tlenu po wysiłku) co skutkuje również znacznie większą ilością spalanych kalorii w trakcie i po treningu, po to by organizm mógł powrócić do stanu równowagi. Takie ćwiczenia z odważnikami wykorzystują i kształtują beztlenowe systemy energetyczne, co zwiększa również zapotrzebowanie na tlen po ich zakończeniu, zwiększając wspomniany efekt EPOC i krótko mówiąc skutecznie redukując nadmiar naszej tkanki tłuszczowej.
          </p>
        </Content>
      </Layout>
    )
  }
}


export default Sylwetka