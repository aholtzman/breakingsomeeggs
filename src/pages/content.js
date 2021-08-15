import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Videos from "../components/videos"

const SecondPage = () => (
  <Layout>
    <Seo title="Content" />
    <h1>Videos</h1>
    <Videos />
  </Layout>
)

export default SecondPage
