// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import cookie from 'react-cookies'

import { Link } from "gatsby"

// import components
import SuperNav from '../SuperNav'

// import logo
import logo from '../../images/logo.png'

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
      showSuperNav: this.props.supernav,
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
    const expires = new Date();
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 5);

    cookie.save('supernav', 'false', { path: '/', expires, maxAge: 1000});


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
              {this.props.supernav}
            </Link>
          </Header.Brand>
          <Header.Hamburger activ={this.state.showSuperNav} onClick={this.toggleSuperNav}/>
          <SuperNav activ={this.state.showSuperNav} clickHandler={this.toggleSuperNav} img={this.props.img}/>
        </nav>
      </Header>
    )
  }
}

export default Navigation;
