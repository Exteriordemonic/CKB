import React from 'react'

import Navigation from './Navigation'

const Nav = () => (
  <Navigation>
    <Navigation.List>
      <Navigation.Item>
        Siła
      </Navigation.Item>
      <Navigation.Item>
        Wytrzymałość
      </Navigation.Item>
      <Navigation.Item>
        Mobilność
      </Navigation.Item>
      <Navigation.Item>
        Zdrowie
      </Navigation.Item>
    </Navigation.List>
  </Navigation>
)

export default Nav;