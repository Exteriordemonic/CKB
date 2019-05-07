import styled from "styled-components"
import React from "react"

import { TransitionGroup, CSSTransition} from 'react-transition-group'

import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"

const Data = [
  {
    title: 'Personal',
    content: 'Trening indywidualny gdzie skupiamy się tylko na Tobie. Rozwiń Swoje umiejętności i stać się królem strzelców'
  },
  {
    title: 'Team',
    content: 'Jestes Trenerem młodego, rokującego zespołu?'
  },
  {
    title: 'Duet',
    content: 'Trenuj ze Swoim najlepszym przyjacielem i razem zdobywajcie szczyty'
  },
]

const Poziom = ({card}) => {
  return (
    <PoziomStyled>
      <ContainerStyled>
        <PoziomLabel as="span" className="subtitle bold" minor>Trening</PoziomLabel>
        <Wrapper>
          <TransitionGroup className="image-wrapper">
            <CSSTransition 
                classNames="lvl" 
                key={card} 
                timeout={{enter: 900, exit:800}}
            >
                  <LVL> 
                    
                    <PoziomTitle className="title bold">{Data[card].title}</PoziomTitle>
                    <PoziomText className="text">
                      {Data[card].content}
                    </PoziomText>
                    <LinkStyled className="subtitle bold" as="a" to="phone:+48508378847" >Zadzwoń: +48 508 378 847</LinkStyled>
                  </LVL>
              </CSSTransition>
            </TransitionGroup>
        </Wrapper>
        <Wrapper mobile>
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
