import React from "react"
import { useIntl } from "../../utils"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
const Page = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "hello" })} />
    </Layout>
  )
}
export default Page
