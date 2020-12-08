module.exports = {
  siteMetadata: {
    title: "Orbit",
    description: "Open source design system for your next travel project.",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "documents",
        path: `${__dirname}/src/documents`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        remarkPlugins: [],
        rehypePlugins: [require("@mapbox/rehype-prism")],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
