import React from "react"
import { Link } from "gatsby"

import Navigation from "./Navigation"

const Nav = () => (
  <Navigation>
    <Navigation.List>
      <Navigation.Item className="subtitle">
        Aktywny czas
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        Gry i zabawy
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        Integracja
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        Wycieczki rowerowe
      </Navigation.Item>
      <Navigation.Item className="subtitle">
        Atrakcje wodne
      </Navigation.Item>
    </Navigation.List>
  </Navigation>
)

export default Nav
