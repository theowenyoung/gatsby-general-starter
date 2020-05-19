import React from "react"
import { useIntl, Link } from "../../utils/intl"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Language from "../../components/boilerplates/language"

const Page = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "hello" })} />
      <Language></Language>
      <ul>
        {["/boilerplates/intl", "/boilerplates/intl-2"].map(link => (
          <li key={link}>
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export default Page
