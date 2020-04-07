/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Coronavirus Heroes",
    titleTemplate: "%s - In memorium",
    description:
      "We honor the healthcare heroes who gave their lives in the Coronavirus Pandemic in 2020",
    url: "https://www.coronavirus-heroes.org",
    image: "/images/title-card.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatting: {
          format: "MMM DD, Y, H:mm", // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
          utc: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-162961986-1",
        head: false,
        anonymize: true,
      },
    },
  ],
}
