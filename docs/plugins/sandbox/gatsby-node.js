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

    createNodeField({
      node,
      name: "scope",
      value: scope,
    });

    createNodeField({
      node,
      name: "example",
      value: example ? omitTypes(example[0]) : "",
    });

    createNodeField({
      node,
      name: "example_id",
      value,
    });
  }
};

/* TODO: This is might be useful for the future sandbox integration,
  for current sandbox-examples we decided to left simple iframe with react components inside
  no need for external page right now.
 */

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const result = await graphql(`
//     query {
//       allFile(filter: { absolutePath: { regex: "/__examples__/" } }) {
//         nodes {
//           id
//           relativePath
//           fields {
//             example_id
//             example
//             scope {
//               name
//               path
//               default
//             }
//           }
//         }
//       }
//     }
//   `);

//   result.data.allFile.nodes.forEach(({ id, fields }) => {
//     createPage({
//       path: `examples/${fields.example_id}`.toLowerCase(),
//       component: path.resolve(path.resolve(__dirname, "../../src/templates/Example/index.tsx")),
//       context: {
//         fields,
//         id,
//       },
//     });
//   });
// };
