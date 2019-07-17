import styled from "styled-components"
import React from "react"
import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import Card from "../components/Card"
import { ContainerStyled } from "../components/Container.styled"

import Header from "./sectionHeader"

import PnCzasZaczc from '../images/posty/1.jpg'
import PtObwod from '../images/posty/2.jpg'
import FrekWak from '../images/posty/3.jpg'
import Silacze from '../images/posty/4.jpg'

const Wiedza = () => {
  return (
    <WiedzaStyled>
      <ContainerStyled>
        <Header title="Aktualności" subtitle="Sprawdź najnowsze posty" />
      </ContainerStyled>
      <ContainerStyled small>
        <CardsContainer>
          {/* 1 */}
          <Card
            as="a"
            href="https://www.facebook.com/MCTreningowe/photos/a.1656337401337823/2076799872624905/?type=3&theater"
            title="Letnie Dziki ruszyły 🚵🐗⛅"
            image={PnCzasZaczc}
          >
            Na koniec dnia szersza relacja 🤩
            <br />
            #SPORTOWE #WAKACJE2019 😍
          </Card>
          {/* 2 */}
          <Card
            as="a"
            href="https://www.facebook.com/MCTreningowe/photos/a.1659012341070329/2076258552679037/?type=3&theater"
            title="Sportowe Wakacje 💪"
            image={PtObwod}
          >
            Startujemy już jutro z drugim turnusem  🔥😉
          </Card>
          {/* 3 */}
          <Card
            as="a"
            href="https://www.facebook.com/MCTreningowe/videos/458582478307435/"
            title="HE MADE IT 🤩🌞"
            image={FrekWak}
          >
            Filip dotarł na swój mały szczyt 💪
            <br />
            Każdy z nas powinien mieć takie swoje małe góry do zdobycia ☝️
          </Card>
          {/* 4 */}
          <Card
            as="a"
            href="https://www.facebook.com/MCTreningowe/photos/a.1656337401337823/2057628107875415/?type=3&theater"
            title="Gdy trener mówi"
            image={Silacze}
          >
            chłopaki zróbmy w końcu poważne miny do zdjęcia 💣💪🏃
          </Card>
        </CardsContainer>
      </ContainerStyled>
    </WiedzaStyled>
  )
}

const WiedzaStyled = styled.section`
  padding: 100px 0 0;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 60px 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const WiedzaTitle = styled(TitleStyled)`
  margin-top: 40px;
  margin-bottom: 20px;
`

export default Wiedza
