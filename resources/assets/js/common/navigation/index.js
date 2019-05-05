// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../modules/auth/service'

// import components
import { Link } from 'react-router-dom'
import { Navbar, NavbarToggler } from 'reactstrap';
import PrivateHeader from './PrivateHeader'
import PublicHeader from './PublicHeader'
import SuperNav from '../SuperNav'

// import logo
import logo from '../../../images/logo.png'

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
    this.logout = this.logout.bind(this);
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
  
  logout(e) {
    e.preventDefault()
    
    this.props.dispatch(logout())
  }
  
  render() {
    return (
      <Header>
        <Navbar>
          <Header.Brand>
            <Link to="/" className="navbar-brand">
              <Header.Logo src={logo} alt="CKB Mrągowo Treningi Ketllebell"/>
            </Link>
          </Header.Brand>
          <Header.Hamburger activ={this.state.showSuperNav} onClick={this.toggleSuperNav}/>
          <SuperNav activ={this.state.showSuperNav} />
          <NavbarToggler className="navbar-toggler d-lg-none" onClick={this.toggleNavbar} />
          {
            this.props.isAuthenticated
              ? <PrivateHeader user={this.props.user}
                              showNavigation={this.state.showNavigation}
                              toggleDropdown={this.toggleDropdown}
                              showDropdown={this.state.showDropdown}
                              logout={this.logout} />
              : <PublicHeader showNavigation={this.state.showNavigation} />
          }
        </Navbar>
      </Header>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  }
}

export default connect(mapStateToProps)(Navigation)
