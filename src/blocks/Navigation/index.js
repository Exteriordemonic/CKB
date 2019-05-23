import React from 'react'
import { Link } from "gatsby"

import Navigation from './Navigation'

const Nav = () => (
  <Navigation>
    <Navigation.List>
      <Navigation.Item className="subtitle">
        <Link to="/sila">Siła</Link>
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        Wytrzymałość
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        Mobilność
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        Zdrowie
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        Sylwetka
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        Energia
      </Navigation.Item>
    </Navigation.List>
  </Navigation>
)

export default Nav;