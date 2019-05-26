import React, {Component} from "react"

import Layout from "../components/layout"
import SmallHero from '../components/smallHero'
import Content from '../components/content'

import img1 from '../images/tgu/3.jpg' 
import img2 from '../images/tgu/5.jpg' 

import image from '../images/pages/mobilnosc.jpg' 

class Mobilnosc extends Component {
  render() {
    return(
      <Layout supernav={false}>
        <SmallHero title="MOBILNOŚĆ" img={image} reverse/>
        <Content img1={img1} img2={img2} >
          <h2>MOBILNOŚĆ i ZDROWE STAWY</h2>
          <p className="text">
          Podczas każdych zajęć Studenci poznają elementy mobility skupiające się na wybranych stawach lub angażujących całe ciało, są one nieodłącznym elementem każdej rozgrzewki. Wykorzystujemy w tym celu techniki z odważnikiem (tj. Halo,Arm Bar, Goblet Squat, TGU) lub tyczką, jednak znaczną część czasu pracujemy z masą własnego ciała. 
          </p>
          <p className="text">
          W ten sposób systematycznie i świadomie dbamy o zdrowie stawów i całego aparatu ruchu, pamiętając o tym że człowiek został stworzony do tego aby się ruszać.
          </p>
        </Content>
      </Layout>
    )
  }
}


export default Mobilnosc