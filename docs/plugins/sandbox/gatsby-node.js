exports.createPages = require("./gatsby/on-create-page");
exports.sourceNodes = require("./gatsby/on-source-nodes");
exports.createSchemaCustomization = require("./gatsby/create-schema-customization");

// prevents error caused by client-side JavaScript importing "fs" while transforming AST in sandbox
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  });
};
