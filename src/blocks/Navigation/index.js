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
        <Link to="/wytrzymalosc">WYTRZYMAŁOŚĆ</Link>
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        <Link to="/mobilnosc">Mobilność</Link>
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        <Link to="/zdrowie">Zdrowie</Link>
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        <Link to="/sylwetka">Sylwetka</Link>
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        <Link to="/energia">Energia</Link>
      </Navigation.Item>
    </Navigation.List>
  </Navigation>
)

export default Nav;