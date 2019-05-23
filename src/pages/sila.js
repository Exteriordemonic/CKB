import React, {Component} from "react"

import Layout from "../components/layout"
import SmallHero from '../components/smallHero'


class Sila extends Component {
  render() {
    return(
      <Layout supernav={false}>
        <SmallHero title="DEFINICJA SIŁY"/>
      </Layout>
    )
  }
}


export default Sila