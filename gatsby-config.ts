module.exports = {
  siteMetadata: {
    title: `Demo of Blueprints + Gatsby + Markdown`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
