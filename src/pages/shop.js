import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Socks from "../images/merch_socks.jpeg"
import TShirt from "../images/merch_tshirt.jpeg"
import Bag from "../images/merch_bag.jpeg"

const Shop = () => (
  <Layout>
    <Seo title="Shop" />
    <h1 style={{ textAlign: "center"}}>Visit BSE Shops</h1>
    <h2><a href="https://breaking-some-eggs.creator-spring.com/">Browse Merch</a></h2>
    <div style={{ display: "flex", justifyContent: "space-between"}}>
      <a href="https://breaking-some-eggs.creator-spring.com/"><Image src={TShirt} alt="tshirt with logo" /></a>
      <A href="https://breaking-some-eggs.creator-spring.com/"><Image src={Socks} alt="socks with logo" /></A>
      <a href="https://breaking-some-eggs.creator-spring.com/"><Image src={Bag} alt="bag with logo" /></a>
    </div>
    <h2><p href="" >Browse Fine Art Prints & Photographs</p></h2>
    <p>to come</p>
  </Layout>
)

export default Shop

const A = styled.a`
  margin: 0 15px;

  @media(max-width: 768px) {
    margin: 0;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin: auto;

  @media(max-width: 768px) {
    max-width: 90%;
    padding: 20px;
    margin: auto;
  }
`
