// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from "gatsby"

// import components
import SuperNav from '../SuperNav'

// import logo
import logo from '../../images/mct.png'

import Header from './Header'

class Navigation extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      showNavigation: false,
      showDropdown: false,
      showSuperNav: false,
    }
  
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleSuperNav = this.toggleSuperNav.bind(this);
  }
  
  toggleNavbar() {
    this.setState({
      showNavigation: !this.state.showNavigation,
    });
  }
  
  toggleDropdown() {
    this.setState({
      showDropdown: !this.state.showDropdown,
    })
  }

  toggleSuperNav(){
    this.setState({
      showSuperNav: !this.state.showSuperNav,
    })
  }
  
  render() {
    return (
      <Header>
        <nav>
          <Header.Brand>
            <Link to="/" className="navbar-brand">
              <Header.Logo src={logo} alt="CKB Mrągowo Treningi Ketllebell"/>
            </Link>
          </Header.Brand>
          <Header.Hamburger activ={this.state.showSuperNav} onClick={this.toggleSuperNav}/>
          <SuperNav activ={this.state.showSuperNav} />
        </nav>
      </Header>
    )
  }
}

export default Navigation;
