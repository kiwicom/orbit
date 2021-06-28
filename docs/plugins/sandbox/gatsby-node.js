const { format } = require("prettier");
const parserTypeScript = require("prettier/parser-typescript");

const { getScope, omitTypes } = require("./helpers");

exports.onCreateNode = async ({ node, actions, loadNodeContent }) => {
  if (node.sourceInstanceName === "examples" && node.internal.type === "File") {
    const { createNodeField } = actions;
    const { relativeDirectory, name } = node;

    await loadNodeContent(node);

    const value = relativeDirectory.split("/").slice(-1).concat(name.toLowerCase()).join("-");

    const { content } = node.internal;

    const example = content.match(/(?<=example:)([\s\S]*)(?=,+[\W]+info)/gim);

    const scope = getScope(content);

    const code = format(omitTypes(example[0]), {
      parser: "typescript",
      plugins: [parserTypeScript],
    });

    createNodeField({
      node,
      name: "scope",
      value: scope,
    });

    createNodeField({
      node,
      name: "example",
      value: example ? code : "",
    });

    createNodeField({
      node,
      name: "example_id",
      value,
    });
  }
};
