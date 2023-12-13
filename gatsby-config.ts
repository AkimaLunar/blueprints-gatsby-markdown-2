import { arbutusTokens } from '@microsoft/arbutus.theming';

module.exports = {
  siteMetadata: {
    title: `Demo of Blueprints + Gatsby + Markdown`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 980,
              wrapperStyle: `border-radius: ${arbutusTokens.shape.borderRadius}}; overflow: hidden;`,
            },
          },
        ],
      },
    },
  ],
};
