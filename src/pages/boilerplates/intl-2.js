import React from "react"
import { useIntl, Link, FormattedMessage } from "../../utils/intl"
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
      <h2>intl-2</h2>
      <h2>
        <FormattedMessage id="hello" defaultMessage="Hello!" />
      </h2>
      <Link to="/boilerplates/intl">Back to intl</Link>
      <br />
      <Link to="/boilerplates/nav/">Go to nav</Link>
    </Layout>
  )
}
export default Page
