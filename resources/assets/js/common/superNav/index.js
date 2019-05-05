import React from 'react';
import styled from 'styled-components'

import ckb from '../../../images/ckb.jpg'
import mct from '../../../images/mct.jpg'
import kolonia from '../../../images/kolonia.jpg'

const Data = [
  {
    image: ckb,
    link: '#ckb',
    title: 'CKB'
  },
  {
    image: mct,
    link: '#mct',
    title: 'MCT'
  },
  {
    image: kolonia,
    link: '#półkolonie',
    title: 'Półkolonie'
  },
]

const Naviagtion = styled.ul`
  transition: ${props => props.activ ? '1.2s' : '1.2s' };
  transition-delay: ${props => props.activ ? '0s' : '0.6s' };
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: black;
  left: ${props => props.activ ? 0 : '-100%' };
  top: 0;
  padding: 0;
  display: flex;
`

const Item = styled.li`
  list-style: none;
  width: calc(100% / 3);
`

const Link = styled.a`
  list-style: none;
  position: relative;
`

const Title = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  font-size: 2vw;
  text-align: center;
  text-transform: uppercase;
`

const Image = styled.img`
  transition: 0.4s;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }
`

const SuperNav = props => (
  <Naviagtion activ={props.activ}>
    {Data.map((elem, i) => {     
      console.log("Entered");                 
      // Return the element. Also pass key     
      return (<Item key={i}>
        <Link href={elem.link}>
          <Image src={elem.image} alt={elem.title}/>
          <Title> {elem.title} </Title>
        </Link>
      </Item>) 
    })}
    
  </Naviagtion>
)

export default SuperNav;