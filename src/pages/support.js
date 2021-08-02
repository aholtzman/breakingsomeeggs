import * as React from "react"
import styled from "styled-components"
import BuyCoffee from "../images/bmc-logo.png"
import KickStarter from "../images/kickstarter.png"
import Patreon from "../images/Digital-Patreon-Logo_Black.png"
import PayPal from "../images/paypal_logo.png"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Support = () => (
  <Layout>
    <Seo title="Support" />
    <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Support Breaking Some Eggs</h1>
    <P><Logo src={Patreon} alt=""/><A href="https://www.patreon.com/breakingsomeeggs" target="_blank" rel="noopener noreferrer" >Patreon</A></P>
    <P><Logo src={BuyCoffee} alt="" /><A href="https://www.buymeacoffee.com/breakingeggs" target="_blank" rel="noopener noreferrer" >Buy Me a Coffee</A></P>
    <P><Logo src={KickStarter} alt=""/><A target="_blank" rel="noopener noreferrer" >Kickstarter (in the works)</A></P>
    <P>
      <Logo src={PayPal} alt="Pay Pal" />
      <form action="https://www.paypal.com/donate" method="post" target="_top" style={{ margin: "auto 0"}}>
        <input type="hidden" name="hosted_button_id" value="CQ7EL5TQKANT2" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </P>
  </Layout>
)

export default Support

const Logo = styled.img`
  width: 100px;
  margin: .5rem 0;
`

const P = styled.p`
  display: flex;
  justify-content: space-between;
  background: rgba(249, 193, 58, 0.14);
  padding: 0 1rem;
`

const A = styled.a`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-left: 1rem;
  font-size: 1.4rem;
  color: black;
  text-align: right;
`
