const { createFilePath } = require(`gatsby-source-filesystem`);
const { getDocumentUrlPath } = require("./utils/document");

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type !== "Mdx") return;
  const { createNodeField } = actions;
  const parent = getNode(node.parent);
  const filePath = createFilePath({ node, getNode, basePath: `pages` });

  createNodeField({
    node,
    name: "slug",
    value: getDocumentUrlPath(filePath),
  });

  // creates a "collection" field to make it easier to filter nodes created by
  // gatsby-source-filesystem instead of awkwardly filtering by file path
  // https://github.com/gatsbyjs/gatsby/issues/1634#issuecomment-388899348

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
          fields {
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error when querying guides.`);
    return;
  }
  result.data.allMdx.nodes.forEach(({ id, fields }) => {
    createPage({
      path: fields.slug,
      component: `${__dirname}/src/templates/Doc.tsx`,
      context: { id },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(
    `
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }

    type MdxFrontmatter {
      date: Date @dateformat
      excerpt: String
      redirect_from: [String]
      title: String!
      type: String
    }
  `,
  );
};
