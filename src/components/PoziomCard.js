import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { colors } from "../styles/variables"

const PoziomCard = props => {
  return (
    <PoziomCardStyled {...props}>
      <h3 className="title">{props.title}</h3>
      <span className="text"> dni:</span>
      <span className="title">{props.dni}</span>
      <PoziomCardIcon>
        {props.active ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
            <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 491.86 491.86"
          >
            <g>
              <path
                d="M465.167,211.614H280.245V26.691c0-8.424-11.439-26.69-34.316-26.69s-34.316,18.267-34.316,26.69v184.924H26.69
			C18.267,211.614,0,223.053,0,245.929s18.267,34.316,26.69,34.316h184.924v184.924c0,8.422,11.438,26.69,34.316,26.69
			s34.316-18.268,34.316-26.69V280.245H465.17c8.422,0,26.69-11.438,26.69-34.316S473.59,211.614,465.167,211.614z"
              />
            </g>
          </svg>
        )}
      </PoziomCardIcon>
    </PoziomCardStyled>
  )
}

const PoziomCardStyled = styled.div`
  padding: 20px;
  color: white;
  border-radius: 30px;
  position: relative;
  transition: 0.4s;

  background: ${props => (props.active ? "#A5A5A5 !important" : "#707070")};
  box-shadow: ${props => (props.active ? "1px 10px 20px 0px rgba(0,0,0,0.4)" : "1px 10px 20px 0px rgba(0,0,0,0)")};
  transform: ${props => (props.active ? "scale(1.2) !important" : "scale(1)")};
  z-index: ${props => (props.active ? "100" : "")};
  width: 250px;
  padding-bottom: 100px;

  &:nth-child(2) {
    background: #333333;
  }

  h3 {
    font-size: 30px;
    z-index: 1;
    padding-left: 20px;
  }

  span:first-of-type {
    font-size: 20px;
    display: block;
    
    z-index: 1;
    margin-left: 50px;
    margin-bottom: 10px;

    margin-top:  80px;
  }

  span:last-of-type {
    font-size: 50px;
    position: relative;
    z-index: 1;
    padding-left: 50px;

    display: block;
    text-align: left;

    :after {
      content: '${props => props.dni}';
      position: absolute;
      top: 20%;
      left: 0; 
      right: 0;
      font-size: 120px;
      opacity: 0.2;
      display: block;
      width: 100%;
      text-align: center;
    }
  }
`

const PoziomCardIcon = styled.div`
  position: absolute;
  bottom: -20px;
  left: calc(50% - 25px);
  background: #d6bc91;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`

export default PoziomCard
