import styled from 'styled-components'

const Hamburger = styled.div`
  transition: 0.8s;
  transition-delay: 0.4s;
  position: absolute;
  left: ${props => props.activ ? '90vw' : '230px' };
  background-color: transparent;
  width: 50px;
  height: 50px;
  z-index: 100;

  &::before,
  &::after {
    content: '';
    transition: 0.4s;
    position: absolute;
    top: ${props => props.activ ? 0 : '-15px' };
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 5px;
    border-radius: 30px;
    background-color: white;
    display: block;
    transform: rotate(${props => props.activ ? '-45deg' : '0deg' });
  }

  &::after {
    top: ${props => props.activ ? 0 : '15px' };
    width: ${props => props.activ ? '100%' : '60%' };
    right: ${props => props.activ ? '100%' : '100%' };
    transform: rotate(${props => props.activ ? '45deg' : '0deg' });
  }
`

export default Hamburger