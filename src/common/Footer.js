import styled from "styled-components"
import React from "react"

import { Colors } from "../vendors/variables"
import { ContainerStyled } from "../components/Container.styled"
import { FacebookProvider, Like, Page  } from 'react-facebook';
import GoogleMapReact from 'google-map-react';

import logo from "../images/logo.png"

const Marker = ({ text }) => <div className="footer__marker"><img src={logo} /></div>;

const defaultProps = {
  center: {
    lat: 53.8563951,
    lng: 21.2933813
  },
  zoom: 17,
}

const Footer = props => (
  <footer className="footer">
    <ContainerStyled>
      <div className="footer__wrapper">
        <address className="footer__cell">
          <h2 className="footer__title title">Kontakt</h2>
          <p className="text">
            <a href="tel:+48508378847"> 📞 +48 508 378 847</a>
            <br />
            <a href="mailto:ckbmragowo@gmail.com"> ✉ ckbmragowo@gmail.com</a>
            <br />
            <br />
            Lubelksa 44, Mrągowo 11-700
          </p>
        </address>
        <div className="footer__cell">
          <h2 className="footer__title title">Jak do nas trafić?</h2>
          <div className="footer__map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyDi30LWxUhiz11T43cgCdDnmrR79ZCkt_E" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <Marker className="footer__marker"
                lat={53.8563951}
                lng={21.2933813}
                text="Sportowe Wakacje"
              />
            </GoogleMapReact>
          </div>
        </div>
        <div className="footer__cell">
          <h2 className="footer__title title">Social Media</h2>
          <FacebookProvider appId="422082718647806">
            <Page href="https://www.facebook.com/CKBMragowo/" />
          </FacebookProvider>
        </div>
      </div>
    </ContainerStyled>
    <p className="footer__copy">
      © COPYRIGHTS 2019 CKB MRĄGOWO
    </p>
  </footer >
)

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${Colors.special};
  color: ${Colors.light};
  text-transform: uppercase;
`

export default Footer
