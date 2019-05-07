import React from 'react'

import Navigation from './Navigation'

const Nav = () => (
  <Navigation>
    <Navigation.List>
      <Navigation.Item className="subtitle">
        Przygotwanie 
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        motoryczne
      </Navigation.Item>
    </Navigation.List>
  </Navigation>
)

export default Nav;