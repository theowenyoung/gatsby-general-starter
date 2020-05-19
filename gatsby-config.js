require("dotenv").config()
const config = require("./config")
module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/locales`,
        // supported language
        languages: config.languages,
        // language file path
        defaultLanguage: config.defaultLanguage,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        redirectDefaultLanguageToRoot: true,
        ignoredPaths: config.intlIgnoredPaths,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: config.clientPathPefixes },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/", "/*"] }],
          },
          production: {
            policy: [{ userAgent: "*", disallow: config.robotDisallow }],
          },
        },
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-zeit-now",
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
