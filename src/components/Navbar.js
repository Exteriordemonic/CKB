import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { ContainerStyled } from "./Container.styled"

const Navbar = props => {
  return (
    <NavbarStyled>
      <NavbarInner>
        <NavbarLogo>LOGO</NavbarLogo>
        <NavbarContent>
          <NavbarLeft>
            <NavbarMenuButton>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path d="M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z" />
                  <path d="M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z" />
                  <path d="M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z" />
                </g>
              </svg>
            </NavbarMenuButton>
          </NavbarLeft>
          <NavbarRight>
            <NavbarUser>
              <NavbarUserText>
                Hello, <NavbarUsername>Kamil</NavbarUsername>
              </NavbarUserText>
              <NavbarUserImage>
                <img src="https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg" />
                <NavbarUserNotification>5</NavbarUserNotification>
              </NavbarUserImage>
            </NavbarUser>
          </NavbarRight>
        </NavbarContent>
      </NavbarInner>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  z-index: 1000;
`

const NavbarInner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const NavbarMenuButton = styled.span`
  margin-left: 40px;
  display: initial !important;
  
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`

const NavbarLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: black;
  padding: 0 20px;
  color: white;

  padding-left: 6rem;

  @media (max-width: 982px) {
    padding-left: 4rem;
  }

  @media (max-width: 768px) {
    padding-left: 3rem;
  }

  @media (max-width: 576px) {
    padding-left: 1rem;
  }
`

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const NavbarRight = styled.div`
  padding-right: 6rem;

  @media (max-width: 982px) {
    padding-right: 4rem;
  }

  @media (max-width: 768px) {
    padding-right: 3rem;
  }

  @media (max-width: 576px) {
    padding-right: 1rem;
  }
`

const NavbarLeft = styled.div``

const NavbarUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const NavbarUserImage = styled.div`
  margin-left: 20px;
  width: 40px;
  height: 40px;

  position: relative;

  img {
    border-radius: 50px;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`

const NavbarUserText = styled.div`
  font-size: 18px;
  color: white;
`

const NavbarUsername = styled.span`
  font-weight: bold;
`

const NavbarUserNotification = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  right: -5px;
  color: white;
  font-size: 14px;
  font-weight: bold;
`

export default Navbar
