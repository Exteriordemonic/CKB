import styled from "styled-components"
import React from "react"

import { TransitionGroup, CSSTransition} from 'react-transition-group'

import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"

import Header from './sectionHeader'

const Data = [
  {
    title: 'Adept',
    content: 'Grupa Adept to Twój pierwszy krok w treningu z odważnikami kulowymi, w okresie od 4 do 6 miesięcy poznasz 6 podstawowych technik hardstyle kettlebell według metodyki Strong First, tj. dead lift(martwy ciąg), swing, clean(zarzut), tgu(tureckie wstawanie), goblet squat(przysiad), military press(wyciskanie żołnierskie), snatch(rwanie). Podczas początkowych zajęć możesz spodziewać się dużej ilości ćwiczeń wzmacniających z masą własną ciała, korygujących błędne nawyki i wzorce ruchowe. Nauczysz się prawidłowo oddychać i wytwarzać napięcie mięśniowe, tak byś mógł/mogła bezpiecznie zacząć ćwiczenia z odważnikiem. Priorytetem jest nauka techniki i przygotowanie Cię do bardziej wymagających treningów z dwoma odważnikami.'
  },
  {
    title: 'Active',
    content: 'Grupa skierowana do osób aktywnych, które przeszły przez pierwszy etap szkolenia i mogą już wykonywać ćwiczenia na dwa odwazniki. Jednocześnie celem tej grupy nie jest osiąganie wyników sportowych, a wykorzystanie kettli do utrzymania dobrej formy, zdrowa i pozytywnej energii w życiu codziennym.'
  },
  {
    title: 'Advanced',
    content: 'Grupa zaawansowana realizuje cele sportowe z nastawieniem na osiąganie wyników siłowych i starty w zawodach hardstyle kettlebell. Do tej grupy mogą dołączyć studenci po wstępnym okresie szkolenia w grupach Adept i Active.'
  },
  {
    title: 'Personal',
    content: 'Treningi personalne to zajęcia które są stworzone pod Twoje indywidualne potrzeby. Podczas takiej współpracy trener poświęca Ci całą swoją uwagę, dzięki czemu szybciej uczysz się, rozwijasz swoje umiejętności i osiągasz wspólnie założone cele. Pierwsze spotkanie zaczynamy od dokładnego wywiadu, oceny fukncjonalnej która pozwoli na ustalenie priorytetów w treningu, ukazując ewentualne dysbalanse mięśniowe, zaburzenia w aparacie ruchu lub wady postawy. Po uzyskaniu niezbędnych informacji zostaje rozpisany plan treningowy, który wspólnie realizujemy na sali. Taka forma współpracy zapewnia swobodę w dopasowaniu terminów zajęć, tak by nie kolidowały z Twoim tygodniowym harmonogramem.'
  },
]

const Poziom = ({card}) => {
  return (
    <PoziomStyled>
      <ContainerStyled>
        <Wrapper>
          <TransitionGroup className="image-wrapper">
            <CSSTransition 
                classNames="lvl" 
                key={card} 
                timeout={{enter: 900, exit:800}}
            >
                  <LVL> 
                    <Header title='Trening' subtitle={Data[card].title}/>
                    <PoziomText className="text">
                      {Data[card].content}
                    </PoziomText>
                    <LinkStyled className="subtitle bold" as="a" href="tel:+48508378847" >
                      
                        Zadzwoń: +48 508 378 847
                      
                    </LinkStyled>
                  </LVL>
              </CSSTransition>
            </TransitionGroup>
        </Wrapper>
        <Wrapper mobile>
          <Header title='Trening'/>
          { Data.map((value, index) => {
            return (
              <LVL key={index}> 
                <PoziomTitle className="title bold">{Data[index].title}</PoziomTitle>
                <PoziomText className="text">
                  {Data[index].content}
                </PoziomText>
              </LVL>
            )
          })}
          <LinkStyled className="subtitle bold" as="a" href="tel:+48508378847" >
            Zadzwoń: +48 508 378 847
          </LinkStyled>
        </Wrapper>
      </ContainerStyled>
    </PoziomStyled>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: ${props => props.mobile ? "none" : "initial"};

  @media (max-width: 768px) {
    display: ${props => props.mobile ? "initial" : "none"};
  }
`

const LVL = styled.div`
  top: 0;
  left: 0;
  transition: .8s;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }

  &.lvl-exit {
    opacity: 1;
    transition: .8s;
    position: absolute;

    &-active{
      transform: translateX(40px);
      opacity: 0;
    }
  }

  &.lvl-enter {
    opacity: 0;

    &-done {
      opacity: 1;
    }
  }
`

const PoziomLabel = styled(TitleStyled)`
  margin-bottom: 60px;
  display: block;
`

const PoziomStyled = styled.div`
  padding: 100px 0;
`

const PoziomTitle = styled(TitleStyled)`
  margin-top: 0;
  margin-bottom: 20px;
`

const PoziomText = styled(TextStyled)`
  margin-right: 50%;
  margin-bottom: 60px;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
    min-width: 100%;
  }
`

export default Poziom
