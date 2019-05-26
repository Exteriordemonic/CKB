import React, {Component} from "react"

import Layout from "../components/layout"
import SmallHero from '../components/smallHero'
import Content from '../components/content'

import img1 from '../images/tgu/3.jpg' 
import img2 from '../images/tgu/5.jpg' 

import image from '../images/pages/wytrzymalosc.jpg' 

class Wytrzymalosc extends Component {
  render() {
    return(
      <Layout supernav={false}>
        <SmallHero title="WYTRZYMAŁOŚĆ" img={image}/>
        <Content img1={img1} img2={img2} >
          <h2>Kształtowanie wytrzymałości</h2>
          <p className="text">
          Kształtujemy ją w oparciu o dwie najważniejsze techniki- Swing i Snatch, pamiętając o tym że jest to również umiejętność podobnie jak siła, więc traktujemy więc ją jako praktykę stosując odpowiednią progresję w danych ćwiczeniach.
          </p>
          <p className="text">
          Pozwalamy aby nasz organizm adaptował się do co raz mocniejszego bodźca stopniowo zwiększając objętość danego ćwiczenia, czy to poprzez liczbę powtórzeń lub czas pracy. Takie podejście pozwala na bezpieczne budowanie wytrzymałości i uniknięcie efektu przetrenowania lub nawet kontuzji.
          </p>
        </Content>
      </Layout>
    )
  }
}


export default Wytrzymalosc