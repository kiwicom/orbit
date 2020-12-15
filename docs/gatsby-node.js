const { createFilePath } = require(`gatsby-source-filesystem`);
// creates a "collection" field to it easier to filter nodes created by
// gatsby-source-filesystem instead of awkwardly filtering by file path
// https://github.com/gatsbyjs/gatsby/issues/1634#issuecomment-388899348

const omitNumbers = str =>
  str
    .split("/")
    .map(s => s.replace(/^\d+-\s*/g, ""))
    .join("/");

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type !== "Mdx") return;
  const { createNodeField } = actions;
  const parent = getNode(node.parent);
  const slug = createFilePath({ node, getNode, basePath: `pages` });

  createNodeField({
    node,
    name: `slug`,
    value: omitNumbers(slug),
  });

  createNodeField({
    node,
    name: "collection",
    value: parent.sourceInstanceName,
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query DocumentationQuery {
      allMdx(filter: { fields: { collection: { eq: "documentation" } } }) {
        nodes {
          id
          slug
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error when querying guides.`);
    return;
  }
  result.data.allMdx.nodes.forEach(guide => {
    const slug = omitNumbers(guide.slug);

    createPage({
      path: `/${slug}`,
      component: `${__dirname}/src/templates/Doc.tsx`,
      context: { id: guide.id },
    });
  });
};
