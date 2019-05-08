import React from 'react'

import Navigation from './Navigation'

const Nav = () => (
  <Navigation>
    <Navigation.List>
      <Navigation.Item className="subtitle">
        Przygotwanie motoryczne
      </Navigation.Item>
      <Navigation.Item small className="text">
        Siła 
      </Navigation.Item>
      <Navigation.Item small className="text">
        Moc 
      </Navigation.Item>
      <Navigation.Item small className="text">
        Szybkość 
      </Navigation.Item>
      <Navigation.Item small className="text">
        Wytrzymałość 
      </Navigation.Item>
      <Navigation.Item small className="text">
        Zwinność 
      </Navigation.Item>
      <Navigation.Item small className="text">
        Mobilność 
      </Navigation.Item>
    </Navigation.List>
  </Navigation>
)

export default Nav;