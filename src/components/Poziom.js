import styled from "styled-components"
import React from "react"

import { TransitionGroup, CSSTransition} from 'react-transition-group'

import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"

import Header from './sectionHeader'

import Personal from '../images/poziom/personal.png'
import Team from '../images/poziom/team.jpg'
import Duet from '../images/poziom/duet.png'

const Data = [
  {
    title: 'Personal',
    content: 'Trening indywidualny w formule 1x1 z trenerem, w ramach którego znajduje się: ocena funkcjonalna według testu MCS1, indywidualnie dobrany plan treningowy, kontrola postępów, baza danych z wynikami, maksymalna efektywność pracy, bezpośrednia motywacja i wsparcie trenera.',
    img: Personal
  },
  {
    title: 'Team',
    content: 'Treningi grupowe od 10 do 15 zawodników, w których znajduje się: ocena funkcjonalna według testu MCS1, testy motoryczne przed i po określonym okresie współpracy, grupowy plan treningowy ukierunkowany na najsłabsze punkty i kluczowe aspekty dyscypliny, baza danych z wynikami testów dla rodziców i trenerów.',
    img: Team
  },
  {
    title: 'Duet',
    content: 'trening w formule 2x1 z trenerem, w którym znajduje się: ocena funkcjonalna według testu MCS1, indywidualnie dobrany plan treningowy, kontrola postępów, baza danych z wynikami, maksymalna efektywność pracy, bezpośrednia motywacja i wsparcie trenera.',
    img: Duet
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
                    <ContentWrapper>
                      <Header title='Trening' subtitle={Data[card].title}/>
                      <PoziomText className="text">
                        {Data[card].content}
                      </PoziomText>
                      <LinkStyled className="subtitle bold" as="a" href="tel:+48508378847" >
                        
                          Zadzwoń: +48 508 378 847
                        
                      </LinkStyled>
                    </ContentWrapper>
                    <ImageWrapper>
                      <img src={Data[card].img} />
                    </ImageWrapper>
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
          <LinkStyled className="subtitle bold">Zapisz sie na zajecia</LinkStyled>
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
  position: relative;

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
  z-index: 20;
  position: relative;
`

const PoziomText = styled(TextStyled)`
  margin-right: 50%;
  margin-bottom: 60px;
  width: 500px;
  z-index: 10;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
    min-width: 100%;
  }
`

const ImageWrapper = styled.div`
  width: 40vw;
  max-width: 600px;
  height: 400px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 40vw;
  z-index: 0;

  @media (max-width: 767px) {
    display: none;
  }

  img {
    margin: 0 auto;
    height: 100%;
    object-position: top;
    box-shadow: 0px 18px 18px -14px rgba(0,0,0,0.6);
  }
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
`

export default Poziom
