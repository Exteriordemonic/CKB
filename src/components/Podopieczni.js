import styled from "styled-components"
import React from "react"

import { TransitionGroup, CSSTransition} from 'react-transition-group'

import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"
import Card from "../components/Card"

import Alec_fereniec from '../images/zawodnicy/alec_fereniec.jpg';
import Alek_kwiatek from '../images/zawodnicy/alek_kwiatek.jpg';
import Dawid_radziwanowski from '../images/zawodnicy/dawid_radziwanowski.jpg';
import Filip_iwanowicz from '../images/zawodnicy/filip_iwanowicz.jpg';
import Julian_orlowski from '../images/zawodnicy/julian_orlowski.jpg';
import Lukasz_rutkowski from '../images/zawodnicy/lukasz_rutkowski.jpg';
import Adrian_joc from '../images/zawodnicy/adrian_joc.jpg';

import Header from './sectionHeader'

const Data = [
  {
    image: Alec_fereniec,
    title: 'Alec Fereniec' 
  },
  {
    image: Alek_kwiatek,
    title: 'Aleksander Kwiatek' 
  },
  {
    image: Dawid_radziwanowski,
    title: 'Dawid Radziwanowski' 
  },
  {
    image: Filip_iwanowicz,
    title: 'Filip Iwanowicz',
  },
  {
    image: Julian_orlowski,
    title: 'Julian Orłowski',
  },
  {
    image: Lukasz_rutkowski,
    title: 'Lukasz Rutkowski',
  },
  {
    image: Adrian_joc,
    title: 'Adrian Joć',
  },
];



const Podopieczni = ({card}) => {
  return (
    <PodopieczniStyled>
      <ContainerStyled>
        <Header title="Nasi" subtitle="Podopieczni" />
      </ContainerStyled>
      <ContainerStyled small>
        <CardsContainer>
          {Data.map((value, index) => (
          <Card
            key={index}
            title={value.title}
            image={value.image}
            cover
          >
          </Card>
          ))}
        </CardsContainer>
      </ContainerStyled>
    </PodopieczniStyled>
  )
}

const PodopieczniStyled = styled.section``

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

export default Podopieczni
