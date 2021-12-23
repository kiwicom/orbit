const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: require.resolve(`gatsby-transformer-json`),
      options: {
        typeName: `Tracking`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: path.resolve(__dirname, "../../data"),
      },
    },
    {
      resolve: require.resolve(`gatsby-plugin-create-client-paths`),
      options: { prefixes: [`/dashboard/*`] },
    },
  ],
};
