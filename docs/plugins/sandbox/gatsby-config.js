const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "examples",
        path: path.join(__dirname, "../../src/__examples__/"),
      },
    },
  ],
};
