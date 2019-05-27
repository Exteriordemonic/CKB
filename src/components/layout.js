/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import cookie from 'react-cookies'

import { Preloader, Placeholder } from 'react-preloading-screen';

import Header from '../common/navigation'
import Footer from '../common/Footer'

import '../styles/styles.scss'

const Layout = ({ supernav, children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Preloader>
        <main>{children}</main>
        <Footer />
        <Placeholder>
            <span>Ładowanie...</span>
        </Placeholder>
      </Preloader>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const query = graphql`
query {
  ckb: file(relativePath: {eq: "ckb.jpg"}) {
    childImageSharp {
      fixed(width: 1920) {
        base64
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  },
  mct: file(relativePath: {eq: "mct.jpg"}) {
    childImageSharp {
      fixed(width: 1920) {
        base64
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  },
  kolonia: file(relativePath: {eq: "kolonie.jpg"}) {
    childImageSharp {
      fixed(width: 1920) {
        base64
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  }
}
`;

export default Layout
