import React from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styled from 'styled-components'

import ckb from '../../images/ckb.jpg'
import mct from '../../images/mct.jpg'
import kolonia from '../../images/kolonia.jpg'

const Data = [
  {
    image: '',
    link: '#',
    title: 'CKB'
  },
  {
    image: '',
    link: 'http://mct-mragowo.pl/',
    title: 'MCT'
  },
  {
    image: '',
    link: 'http://polkolonie-mazury.pl/',
    title: 'Półkolonie'
  },
]


const SuperNav = props => (
  <Naviagtion activ={props.activ}>
    {Data.map((elem, i) => {
      console.log("Entered");
      // Return the element. Also pass key     
      return (<Item key={i}>
        <Link href={elem.link} onClick={props.clickHandler}>
          <Img fixed={props.img[i]} alt={elem.title} />
          {/* <Imagee src={elem.image} onClick={props.clickHandler} alt={elem.title} /> */}
        </Link>
      </Item>)
    })}

  </Naviagtion>
)


const Naviagtion = styled.ul`
  transition: ${props => props.activ ? '1.2s' : '1.2s'};
  transition-delay: ${props => props.activ ? '0s' : '0.6s'};
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: black;
  left: ${props => props.activ ? 0 : '-100%'};
  top: 0;
  padding: 0;
  margin: 0;
  display: flex;
`

const Item = styled.li`
  list-style: none;
  width: calc(100% / 3);
  margin: 0;
`

const Link = styled.a`
  list-style: none;
  position: relative;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-transform: none;
  text-decoration: none;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }

`

const Title = styled.span`
  color: white;
  font-size: 2vw;
  text-align: center;
  text-transform: uppercase;
  height: 20px;
`

const Imagee = styled.img`
  transition: 0.4s;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    opacity: 1;
  }
`

export default SuperNav;