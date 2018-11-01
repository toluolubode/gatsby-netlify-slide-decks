module.exports = {
  siteMetadata: {
    name: `Tolu Olubode`,
    title: `Gatsby + Netlify Slide Deck`,
    date: `July 30, 2018`,
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
