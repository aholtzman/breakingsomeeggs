import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import HeaderNavItem from "./header_nav_item"
import HeaderMobileNav from "./header_mobile_nav"

const navigation = [
  { name: "About", page: "/about"},
  { name: "Support", page: "/support"},
  { name: "Shop", page: "/shop"},
  { name: "Content", page: "/content"},
]

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#f9c13a`,
      marginBottom: `1.45rem`,
      padding: `1.5rem 0 0 0`
    }}
  >
    <DesktopNav>
    {navigation.map(nav => <HeaderNavItem name={nav.name} page={nav.page} key={nav.name} />)}
    </DesktopNav>
    <HeaderMobileNav navItems={navigation} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const DesktopNav = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  justify-content: space-evenly;

  @media(max-width: 768px) {
    display: none;
  }
`
