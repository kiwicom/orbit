const path = require("path");
const fs = require("fs");
const yaml = require("js-yaml");

const { createFilePath } = require(`gatsby-source-filesystem`);
const {
  omitNumbers,
  getDocumentUrl,
  metaFileDataMap,
  getParentUrl,
  getDocumentTrail,
} = require("./utils/document");

exports.onCreateNode = ({ node, getNode, actions, reporter }) => {
  if (
    node.internal.type === "Directory" &&
    node.sourceInstanceName === "documentation" &&
    node.relativePath !== "" &&
    !node.relativePath.startsWith("assets")
  ) {
    const metaFilePath = path.join(node.absolutePath, "meta.yml");
    const url = omitNumbers(path.join("/", node.relativePath, "/"));

    if (!fs.existsSync(metaFilePath)) {
      reporter.panicOnBuild(
        `Expected meta.yml file to exist in "${node.absolutePath}", every directory in "src/documentation" should have one`,
      );
      metaFileDataMap.set(url, {});
      return;
    }

    const metaFileData = yaml.load(fs.readFileSync(metaFilePath));
    const missingFields = [];

    if (typeof metaFileData.title === "undefined") {
      missingFields.push("title");
    }
    if (typeof metaFileData.type === "undefined") {
      missingFields.push("type");
    } else if (!["folder", "tabs"].includes(metaFileData.type)) {
      reporter.panicOnBuild(
        `Expected the value of "type" in "${metaFilePath}" to be one of: folder, tabs`,
      );
    }

    if (missingFields.length > 0) {
      reporter.panicOnBuild(
        `Expected "${metaFilePath}" to contain fields: ${missingFields.join(", ")}`,
      );
    }

    metaFileDataMap.set(url, metaFileData);

    return;
  }

  if (node.internal.type === "Mdx") {
    const { createNodeField } = actions;
    const parent = getNode(node.parent);
    const fileUrl = createFilePath({ node, getNode, basePath: `pages` });
    const { dir } = path.parse(fileUrl);
    const metaFileData = metaFileDataMap.get(getParentUrl(omitNumbers(fileUrl))) || {};
    const hasTabs = metaFileData.type === "tabs";

    createNodeField({
      node,
      name: "slug",
      value: getDocumentUrl(fileUrl, hasTabs),
    });

    createNodeField({
      node,
      name: "description",
      value: node.frontmatter.description || node.description || metaFileData.description,
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
      value: hasTabs ? parent.relativeDirectory : null,
    });

    // Make title the same for all pages in tabs
    const title = hasTabs ? metaFileData.title : node.frontmatter.title;
    createNodeField({
      node,
      name: "title",
      value: hasTabs ? metaFileData.title : node.frontmatter.title,
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
      value: getLinkForComponents() || node.frontmatter.headerLink || metaFileData.headerLink,
    });

    if (node.fields.collection === "documentation") {
      let documentTrail;

      if (hasTabs && path.basename(node.fileAbsolutePath).startsWith("01-")) {
        documentTrail = getDocumentTrail(node.fields.slug);
      } else {
        documentTrail = getDocumentTrail(getParentUrl(node.fields.slug));
        documentTrail.push({
          name: node.frontmatter.title,
          url: node.fields.slug,
        });
      }

      createNodeField({
        node,
        name: "trail",
        value: documentTrail,
      });
    } else {
      createNodeField({
        node,
        name: "trail",
        value: [],
      });
    }
  }
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
      component: `${process.cwd()}/src/templates/Doc.tsx`,
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
      trail: [TrailPart]
    }

    type TrailPart {
      name: String!
      url: String!
    }
  `,
  );
};
