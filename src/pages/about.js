import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About" />
    <h1>What is Breaking Some Eggs?</h1>
    <p>It is a multidisciplinary conceptual art project examining the current tensions between art, commerce and the culture of content.</p>
    <p>And a lot of videos of making scrambled eggs.</p>
    <h2>OK, then where is the Art?</h2>
    <p>The art here is the hustle. Attention is now a commodity; creatives are the labor providing products for insatiable online audiences feeding corporate bottom lines. The website, content, merch, and calls for support are all components of the project.</p>
    <p>There will also be photographs to buy if you need some scrambled eggs for your wall to feel complete.</p>
    <h2>Who is behind this?</h2>
    <p>My name is Adam Holtzman. I make other things as well that you can see on my other <a href="https://adamholtzman.com" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>website</a>.</p>
  </Layout>
)

export default About
