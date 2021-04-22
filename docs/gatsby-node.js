const path = require("path");

const { createFilePath } = require(`gatsby-source-filesystem`);
const { doesPageHaveTabs, getDocumentUrlPath, getMetaFileData } = require("./utils/document");

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type !== "Mdx") return;

  const { createNodeField } = actions;
  const parent = getNode(node.parent);
  const filePath = createFilePath({ node, getNode, basePath: `pages` });
  const { dir, base, name } = path.parse(filePath);
  const metaFile = getMetaFileData(dir);

  createNodeField({
    node,
    name: "slug",
    value: getDocumentUrlPath(dir, base, name),
  });

  createNodeField({
    node,
    name: "description",
    value: node.frontmatter.description || node.description || metaFile.description,
  });

  // creates a "collection" field to make it easier to filter nodes created by
  // gatsby-source-filesystem instead of awkwardly filtering by file path
  // https://github.com/gatsbyjs/gatsby/issues/1634#issuecomment-388899348

  createNodeField({
    node,
    name: "collection",
    value: parent.sourceInstanceName,
  });

  // Create a similar field that should be identical
  // for all pages that are tabs in one folder
  createNodeField({
    node,
    name: "tabCollection",
    value: doesPageHaveTabs(dir) ? parent.relativeDirectory : null,
  });

  // Make title the same for all pages in tabs
  const title = doesPageHaveTabs(dir) ? getMetaFileData(dir).title : node.frontmatter.title;
  createNodeField({
    node,
    name: "title",
    value: title,
  });

  const getLinkForComponents = () => {
    if (dir.startsWith("/03-components")) {
      if (dir.match(/primitive/)) {
        return `https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/primitives/${title}`;
      }
      if (dir.match(/grid/)) {
        return `https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/utils/Grid`;
      }
      return `https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/${title}`;
    }
    return "";
  };

  createNodeField({
    node,
    name: "headerLink",
    value: getLinkForComponents() || node.frontmatter.headerLink || metaFile.headerLink,
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
            tabCollection
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
      context: { id, tabs: fields.tabCollection },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(
    `
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
      fields: MdxFields
    }

    type MdxFrontmatter {
      date: Date @dateformat
      description: String
      redirect_from: [String]
      title: String!
      type: String
    }

    type MdxFields {
      collection: String!
      description: String
      slug: String!
      tabCollection: String
      title: String!
    }
  `,
  );
};
