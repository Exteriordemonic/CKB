import styled from "styled-components"

//import elements
import Brand from "./Brand"
import Logo from "./Logo"
import Hamburger from "./Hamburger"

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;

  .navbar {
    padding: 0;
  }
`

//Add elements to block
Header.Brand = Brand
Header.Logo = Logo
Header.Hamburger = Hamburger

export default Header
