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

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query ExamplesQuery {
      allFile {
        nodes {
          id
          fields {
            example
            example_id
            scope {
              name
              path
              default
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error when querying examples.`);
    return;
  }

  result.data.allFile.nodes.forEach(({ id, fields }) => {
    if (!fields) return;

    const { example_id, example, scope } = fields;

    createPage({
      path: `examples/${example_id.toLowerCase()}`,
      component: `${process.cwd()}/src/templates/Sandbox.tsx`,
      context: { id, example, example_id, scope },
    });

    createPage({
      path: `examples/${id}`,
      component: `${process.cwd()}/src/templates/Sandbox.tsx`,
      context: { id, example, example_id, scope, pure: true },
    });
  });
};
