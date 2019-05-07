import styled from "styled-components"
import React from "react"
import { TitleStyled } from "./Title.styled"
import { LinkStyled } from "./Link.styled"
import { TextStyled } from "./Text.styled"
import { ContainerStyled } from "../components/Container.styled"

const Sala = ({ background }) => {
  const kettleBellIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
    >
      <g>
        <path d="M171,112.786V72.141c0-6.64,5.373-12.023,12-12.023h148c6.627,0,12,5.383,12,12.023v41.425   c21.453,8.429,41.643,20.01,60,34.511V60.117C403,26.915,376.137,0,343,0H171c-33.137,0-60,26.915-60,60.117v86.4   C129.394,132.301,149.58,120.977,171,112.786z" />
        <path d="M256,127.249c-114.969,0-208,93.201-208,208.407c0,70.112,34.863,135.101,93.258,173.846   c2.456,1.63,5.336,2.499,8.282,2.499h212.92c2.945,0,5.826-0.869,8.282-2.499C429.137,470.757,464,405.768,464,335.656   C464,220.462,370.981,127.249,256,127.249z M240.626,368.113c5.858,5.869,5.858,15.385,0,21.254c-5.857,5.869-15.355,5.87-21.213,0   L190,359.896v18.844c0,8.3-6.716,15.029-15,15.029s-15-6.729-15-15.029V270.528c0-8.3,6.716-15.029,15-15.029s15,6.729,15,15.029   v18.844l29.414-29.471c5.857-5.87,15.355-5.87,21.213,0c5.858,5.869,5.858,15.385,0,21.254l-43.393,43.478L240.626,368.113z    M352,378.74c0,8.3-6.716,15.029-15,15.029c-4.785,0-9.037-2.253-11.783-5.749C292.008,405.544,252,381.222,252,343.671v-38.074   c0-27.624,22.43-50.098,50-50.098c18.809,0,35.848,10.413,44.467,27.175c3.794,7.379,0.9,16.442-6.464,20.244   c-7.365,3.799-16.41,0.901-20.205-6.477C310.236,277.843,282,284.638,282,305.597v38.074c0,11.049,8.972,20.039,20,20.039   c10.353,0,18.892-7.923,19.899-18.035H315c-8.284,0-15-6.729-15-15.029c0-8.3,6.716-15.029,15-15.029h22   c8.284,0,15,6.729,15,15.029V378.74z" />
      </g>
    </svg>
  )

  const benchPressIcon = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="m60 249c-33.085938 0-60 26.914062-60 60s26.914062 60 60 60 60-26.914062 60-60-26.914062-60-60-60zm0 80c-11.027344 0-20-8.972656-20-20s8.972656-20 20-20 20 8.972656 20 20-8.972656 20-20 20zm110-209c-11.046875 0-20-8.953125-20-20s8.953125-20 20-20 20 8.953125 20 20-8.953125 20-20 20zm236.554688 209c-26.160157-49-77.175782-80-133.480469-80h-43.074219v40h43.074219c33.648437 0 64.734375 15.035156 85.539062 40h-148.613281c-11.027344 0-20-8.972656-20-20v-111.011719c45.589844-9.289062 80-49.695312 80-97.988281 0-55.140625-44.859375-100-100-100s-100 44.859375-100 100c0 48.292969 34.410156 88.699219 80 97.988281v111.011719c0 33.085938 26.914062 60 60 60h262v143h40v-183zm-296.554688-229c0-33.085938 26.914062-60 60-60s60 26.914062 60 60-26.914062 60-60 60-60-26.914062-60-60zm0 0" />
    </svg>
  )

  return (
    <SalaContainer small background={background}>
      <SalaBackgroundOverlay />
      <SalaBackground>
        <SalaInfo>
          <TitleStyled className="subtitle bold" minor inverted>
            Nasza
          </TitleStyled>
          <SalaTitle className="title bold" inverted>Sala</SalaTitle>
          <SalaText className="text" inverted>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Nulla quis lorem ut libero malesuada feugiat. Mauris blandit
            aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet
            quam id dui posuere blandit.Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Curabitur aliquet quam id dui posuere blandit.
          </SalaText>
          <LinkStyled className="subtitle bold" inverted>Zapisz sie na zajecia</LinkStyled>
        </SalaInfo>
        {/* <SalaIcons>
          <SalaIconElement>
            <i>{kettleBellIcon}</i>8 x 8kg
          </SalaIconElement>
          <SalaIconElement>
            <i>{kettleBellIcon}</i>8 x 10kg
          </SalaIconElement>
          <SalaIconElement>
            <i>{kettleBellIcon}</i>8 x 12kg
          </SalaIconElement>
          <SalaIconElement>
            <i>{kettleBellIcon}</i>8 x 20kg
          </SalaIconElement>
          <SalaIconElement>
            <i>{kettleBellIcon}</i>8 x 24kg
          </SalaIconElement>
          <SalaIconElement>
            <i>{kettleBellIcon}</i>8 x 32kg
          </SalaIconElement>
          <SalaIconElement>
            <i>{benchPressIcon}</i>max 200kg
          </SalaIconElement>
        </SalaIcons> */}
      </SalaBackground>
    </SalaContainer>
  )
}

const SalaContainer = styled(ContainerStyled)`
  background: url(${props => props.background});
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 100px 0;
`

const SalaBackground = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 60px 0;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 1100px){
    grid-template-columns: 1fr;
  }

  div {
    z-index: 3;
  }
`
const SalaBackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #707070;
  opacity: 0.6;
  z-index: 2;
  left: 0;
`

const SalaTitle = styled(TitleStyled)`
  margin-top: 40px;
  margin-bottom: 20px;
`

const SalaText = styled(TextStyled)`
  margin-bottom: 60px;
`

const SalaInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const SalaIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  font-size: 27px;
  grid-gap: 40px;

  svg {
    width: 70px;
    height: 70px;
    fill: white;
    margin-right: 20px;
  }

  @media (max-width: 576px){
    grid-template-columns: 1fr;
  }
`

const SalaIconElement = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default Sala
