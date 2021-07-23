import * as React from "react"
import eggs from "../images/egg.png"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
//
// import Layout from "../components/layout"
// import Seo from "../components/seo"

const IndexPage = () => (
  <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "space-around", flexDirection: "column"}}>
  <div style={{ width: "100vw", display: "flex", justifyContent: "space-around", flexDirection: "column"}}>
    <img src={eggs} alt="cracked open egg" style={{ width: "400px", margin: "auto"}}/>
    <h1 style={{ margin: "auto", textAlign: "center"}}>breaking some eggs</h1>
    </div>
  </div>
)

export default IndexPage
