import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"
import Header from "./header"

const Layout = ({ children }) => {
  return <><Header /><Main>{children}</Main></>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  max-width: 60ch;
  margin: 0 auto;

  @media(max-width: 768px) {
    padding: 1rem;
  }
`
