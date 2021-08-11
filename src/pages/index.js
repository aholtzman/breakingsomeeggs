import * as React from "react"
import styled from "styled-components"
import eggs from "../images/egg.png"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Breaking Some Eggs"/>
    <div style={{ height: "100%", display: "flex", justifyContent: "space-around", flexDirection: "column"}}>
    <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "column"}}>
      <Egg src={eggs} alt="cracked open egg" />
      <h1 style={{ margin: "auto", textAlign: "center"}}>breaking some eggs</h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage

const Egg = styled.img`
  max-Width: 400px;
  width: 90%;
  margin: auto;
`
