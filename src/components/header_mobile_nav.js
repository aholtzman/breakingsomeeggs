import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Carton from "../assets/egg_carton.svg"

export default function HeaderMobileNav({ navItems }) {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <Carton fill="#2d2d2d" style={{ alignSelf: "center", marginTop: "-25px", marginRight: "20px", opacity: 0.9 }} onClick={() => setShow(!show)}/>
      </div>
      {show && (
        <Container>
          {navItems.map(n => <Link key={n.name} to={n.page}>{n.name}</Link>)}
        </Container>
      )}
    </Wrapper>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  position: absolute;
  width: 100%;
  background-color: #f9c13a;

  a {
    color: #2d2d2d;
    font-size: 1.4rem;
    padding: 1rem 0;
    text-decoration: none;
    font-weight: 700;
    border-bottom:2px solid rgba(255, 255, 255, 0.8);
  }
`

const Wrapper = styled.div`
  display: none;
  position: relative;

  @media(max-width: 768px) {
    display: block;
  }
`
