import * as React from "react"
import eggs from "../images/egg.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Breaking Some Eggs"/>
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "space-around", flexDirection: "column"}}>
    <div style={{ width: "100vw", display: "flex", justifyContent: "space-around", flexDirection: "column"}}>
      <img src={eggs} alt="cracked open egg" style={{ width: "400px", margin: "auto"}}/>
      <h1 style={{ margin: "auto", textAlign: "center"}}>breaking some eggs</h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
