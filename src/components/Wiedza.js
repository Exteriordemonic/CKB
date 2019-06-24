import styled from "styled-components"
import React from "react"
import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import Card from "../components/Card"
import { ContainerStyled } from "../components/Container.styled"

import Header from "./sectionHeader"

import C1 from "../images/logo.png"
import PnCzasZaczc from '../images/posty/pn_czas_zaczac.png'
import PtObwod from '../images/posty/pt_obwod.jpg'
import FrekWak from '../images/posty/frek_wakacyjna.jpg'
import Silacze from '../images/posty/silacze.jpg'

const Wiedza = () => {
  return (
    <WiedzaStyled>
      <ContainerStyled>
        <Header title="Aktualności" subtitle="Sprawdź najnowsze posty" />
      </ContainerStyled>
      <ContainerStyled small>
        <CardsContainer>
          <Card
            as="a"
            href="https://www.facebook.com/CKBMragowo/videos/585195345526569/"
            title="Poniedziałek czas zacząć"
            image={PnCzasZaczc}
          >
            😉💣💪
          </Card>
          <Card
            as="a"
            href="https://www.facebook.com/CKBMragowo/posts/1142943875890537?__xts__[0]=68.ARD0d1I1MTK-b4DzN6UNfi-Jo7gtWxFVBJNBV1RqDt5gJ2_AV9bgu-Bj95f59ETCvWVPdT7b7VtCFmItgm_JoQtsojMZPjB5uJK_P0HTfh0lngkKfldKT2EJXDkPJa0P1Mza-rhBzMT1Uwi1tyf0oSmepaEsQk4BxDBxHNqE_FM361s-9ZYLwfsK0wSOBxADE-gn7foThkHXtVtUMHD9fhEtHxoKgohk748iVg1SfSZrTCnLEQO4XjYXQIi7GEJ-hfN8BGk1Y4NMGFGQNYSJuyNjzLY9XhYP42GFlQ980agB6qFdY30uFZT42NxPFcTC2YtOceRWgLt-Ib8nsJGR_Snraw&__tn__=-R"
            title="Piątkowy obwód za nami 💪"
            image={PtObwod}
          >
            Opona, lina i TRX robią swoje 🔥😉
          </Card>
          <Card
            as="a"
            href="https://www.facebook.com/CKBMragowo/videos/475600943192999/?v=475600943192999"
            title="Frekwencja wakacyjna 🌞"
            image={FrekWak}
          >
            ale za to Snatch zdecydowanie nie wakacyjny 😉💣
          </Card>
          <Card
            as="a"
            href="https://www.facebook.com/CKBMragowo/photos/a.486736071511324/1139889512862640/?type=3&theater"
            title="Kolejny etap"
            image={Silacze}
          >
            Dwóch Siłaczy dołącza do grupy zaawansowanej i pewnie zmierza po swoje pierwsze kettlowe rekordy 😉💣
            <br/>
            Gratulacje dla Grzecha i Kamila 👏
            <br/>
            Solidna praca i mega zaangażowanie 🔥
          </Card>
        </CardsContainer>
      </ContainerStyled>
    </WiedzaStyled>
  )
}

const WiedzaStyled = styled.section`
  margin: 100px 0;
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
