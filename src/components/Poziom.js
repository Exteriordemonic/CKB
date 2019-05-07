import styled from "styled-components"
import React from "react"

import { TransitionGroup, CSSTransition} from 'react-transition-group'

import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"

const Data = [
  {
    title: 'ADEPT',
    content: 'Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'ACTIVE',
    content: 'Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Sed porttitor lectus nibh. Vivamus suscipit tortor  suscipit eget felis  suscipit porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'ADVANCED',
    content: 'Nulla porttitor accumsan t Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
]

const Poziom = ({card}) => {
  return (
    <PoziomStyled>
      <ContainerStyled>
        <PoziomLabel as="span" className="subtitle bold" minor>Poziom</PoziomLabel>
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
                    <LinkStyled className="subtitle bold">Zapisz sie na zajecia</LinkStyled>
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

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
  }
`

export default Poziom
