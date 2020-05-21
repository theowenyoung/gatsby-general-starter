import React from "react"
import { useIntl } from "../../utils"
import Link from "../../components/link"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Language from "../../components/boilerplates/language"
const Page = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "hello", defaultMessage: "Hello!" })}
      />
      <Language></Language>
      <h2>intl</h2>
      <h2>{intl.formatMessage({ id: "hello", defaultMessage: "Hello!" })}</h2>
      <Link to="/boilerplates/intl-2/">Go to intl2</Link>
      <br />
      <Link to="/boilerplates/nav/">Go to nav</Link>
    </Layout>
  )
}
export default Page
