import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { createFilePath } from "gatsby-source-filesystem";
import type { GatsbyNode } from "gatsby";

import { omitNumbers, getDocumentUrl, getParentUrl, getDocumentTrail } from "./utils/document";
import getOverviewPages from "./services/overviewPages";
import parseChangelog from "./services/changelog";

const ROOT = path.resolve(__dirname, "..");

export const onCreateNode = async ({ cache, node, getNode, actions, reporter }) => {
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
        `Expected meta.yml file to exist in "${
          process.env.NODE_ENV === "test"
            ? path.relative(ROOT, node.absolutePath)
            : node.absolutePath
        }", every directory in "src/documentation" should have one`,
      );
      await cache.set(url, {});
    }
  }

  /**
   * TODO: updating meta.yml files should update document navigation and breadcrumbs,
   * an obvious solution for this is to compute `trail` on frontend rather than here,
   * but we wanted to avoid large and repetitive GraphQL queries.
   *
   * A temporary and clumsy way to see meta.yml updates appears to be editing an MDX file
   * within the same directory.
   */

  if (
    node.internal.type === "File" &&
    node.base === "meta.yml" &&
    node.sourceInstanceName === "documentation"
  ) {
    const metaFilePath = node.absolutePath;
    const metaFilePathRelative = path.relative(ROOT, metaFilePath);
    const url = omitNumbers(path.join("/", node.relativeDirectory, "/"));
    const metaFileData = yaml.load(fs.readFileSync(metaFilePath));
    const missingFields = [];

    if (typeof metaFileData.title === "undefined") {
      // @ts-expect-error TODO
      missingFields.push("title");
    }
    if (typeof metaFileData.type === "undefined") {
      // @ts-expect-error TODO
      missingFields.push("type");
    } else if (!["folder", "tabs"].includes(metaFileData.type)) {
      reporter.panicOnBuild(
        `Expected the value of "type" in "${
          process.env.NODE_ENV === "test" ? metaFilePathRelative : metaFilePath
        }" to be one of: folder, tabs`,
      );
    }

    if (missingFields.length > 0) {
      reporter.panicOnBuild(
        `Expected "${
          process.env.NODE_ENV === "test" ? metaFilePathRelative : metaFilePath
        }" to contain fields: ${missingFields.join(", ")}`,
      );
    }

    await cache.set(url, metaFileData);
  }

  if (node.internal.type === "Mdx") {
    const { createNodeField } = actions;
    const parent = getNode(node.parent);
    const fileUrl = createFilePath({ node, getNode, basePath: `pages` });
    const { dir } = path.parse(fileUrl);
    const metaFileData = (await cache.get(getParentUrl(omitNumbers(fileUrl)))) || {};
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
        documentTrail = await getDocumentTrail(cache, node.fields.slug);
      } else {
        documentTrail = await getDocumentTrail(cache, getParentUrl(node.fields.slug));
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

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
  cache,
}) => {
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

  const overviewPages = await getOverviewPages();

  await Promise.all(
    overviewPages.map(async page => {
      const trail = await getDocumentTrail(cache, page.slug);
      const overviewPath = path.join(__dirname, "../../src/templates/Overview.tsx");
      createPage({
        path: page.slug,
        component:
          process.env.NODE_ENV === "test" ? path.relative(ROOT, overviewPath) : overviewPath,
        context: { ...page, trail },
      });
    }),
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error when querying guides.`);
    return;
  }

  // @ts-expect-error TODO
  result.data.allMdx.nodes.forEach(({ id, fields }) => {
    createPage({
      path: fields.slug,
      component: `${process.cwd()}/src/templates/Doc.tsx`,
      context: { id, tabs: fields.tabCollection },
    });
  });
};

export const onPreBuild = async () => {
  await parseChangelog();
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
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
