import React from "react"
import { Link } from "../utils/intl"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/boilerplates/nav">Go to boilerplate nav page</Link>
  </Layout>
)

export default IndexPage
