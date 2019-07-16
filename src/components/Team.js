import styled from "styled-components"
import React from "react"
import { TitleStyled } from "./Title.styled"
import Card from "../components/Card"
import { ContainerStyled } from "../components/Container.styled"

import Header from "./sectionHeader"

import PnCzasZaczc from '../images/posty/pn_czas_zaczac.png'
import PtObwod from '../images/posty/pt_obwod.jpg'
import FrekWak from '../images/posty/frek_wakacyjna.jpg'
import Silacze from '../images/posty/silacze.jpg'

import members from '../data/members'

const Team = () => {
    return (
        <TeamStyled>
            <ContainerStyled>
                <Header title="Poznaj nasz Team" subtitle="STUDENCI  SIŁY" />
            </ContainerStyled>
            <ContainerStyled small>
                <CardsContainer>
                    {members.map((item, key) =>
                        <Card
                            as="a"
                            href={item.link}
                            title={item.name}
                            image={item.image}
                            key={item.id}
                        />
                    )}

                </CardsContainer>
            </ContainerStyled>
        </TeamStyled>
    )
}

const TeamStyled = styled.section`
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

const TeamTitle = styled(TitleStyled)`
  margin-top: 40px;
  margin-bottom: 20px;
`

export default Team
