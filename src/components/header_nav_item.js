import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Carton from "../assets/egg_carton.svg"

export default function HeaderNavItem({ name = "DEFAULT", page = "" }) {
  return (
    <PageLink to={page}>
      {name}
      <Carton fill="#fff" style={{ alignSelf: "center", marginTop: "-25px", opacity: 0.9 }} />
    </PageLink>
  )
}

const PageLink = styled(Link)`
  display: flex;
  flex-direction: column;
  color: #2d2d2d;
  text-decoration: none;
  text-align: center;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 700;
  transition: color 0.5s;

  &:hover {
    color: white;
  }
`
