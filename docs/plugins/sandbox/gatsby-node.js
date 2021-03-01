const LoadablePlugin = require("@loadable/webpack-plugin");
const path = require("path");
const { unlinkSync } = require("fs");

const { statsPath, getSource } = require("./helpers");

exports.onCreateNode = async ({ node, actions, loadNodeContent }) => {
  if (node.sourceInstanceName === "examples" && node.internal.type === "File") {
    const { createNodeField } = actions;
    const { relativeDirectory, relativePath, name } = node;

    await loadNodeContent(node);

    const value = relativeDirectory.split("/").slice(-1).concat(name.toLowerCase()).join("-");

    const { content } = node.internal;
    const example = content.match(/(?<=example:)([\s\S]*)(?=,+[\W]+info)/gim);
    // const scope = content.match(/(?<=scope: )([\s\S]*)(?=,+[\W])/gim);

    // createNodeField({
    //   node,
    //   name: "scope",
    //   value: scope ? scope[0] : "",
    // });

    createNodeField({
      node,
      name: "example",
      value: example ? example[0] : "",
    });

    createNodeField({
      node,
      name: "example-id",
      value,
    });

    const source = getSource(path.join(__dirname, "../../src/__examples__/", relativePath));
    console.log("source", source);
  }
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      plugins: [new LoadablePlugin()],
    });
  }
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({ name: "@loadable/babel-plugin" });
};

exports.onPostBuild = () => unlinkSync(statsPath);
