import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'navigation_home' })} />

      <h1>AVI Bowling</h1>
    </Layout>
  )
}

export default IndexPage
