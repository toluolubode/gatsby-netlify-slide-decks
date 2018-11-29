module.exports = {
  siteMetadata: {
    name: `Tolu Olubode`,
    title: `Getting Started with ReactJS Deck`,
    date: `December 1, 2018`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
