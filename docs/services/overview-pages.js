const globby = require("globby");
const fsx = require("fs-extra");
const yaml = require("js-yaml");
const matter = require("gray-matter");
const _ = require("lodash");
const path = require("path");

const { omitNumbers } = require("../utils/document");

const DOCUMENTATION_PATH = path.resolve(__dirname, "../src/documentation");

// derive pages with nested pages from given object structure
// this function can probably be simplified further
function createPages(obj, slugPiece = "/") {
  return Object.entries(obj).map(([key, value]) => {
    if (typeof value === "object") {
      const slug = path.join(slugPiece, key, "/");

      if (!value.meta) {
        if (value.type) return null;
        return { slug, ...value };
      }

      if (value.meta.type === "tabs") {
        return {
          slug,
          title: value.meta.title,
          description: value.meta.description,
          hasReactTab: value.meta.hasReactTab,
        };
      }

      const pages = createPages(value, slug).filter(Boolean);

      if (pages.length > 0) {
        return {
          slug,
          title: value.meta.title,
          description: value.meta.description,
          pages,
        };
      }

      const parsePages = Object.keys(value)
        .map(k => ({ title: _.startCase(_.toLower(k)) }))
        .filter(k => k !== "meta");

      return {
        slug,
        title: value.meta.title,
        pages: parsePages,
      };
    }

    return null;
  });
}

async function getOverviewPages() {
  const structure = {};

  // from these files we'll generate a list of pages containing nested pages in two stages
  const files = await globby(path.join(DOCUMENTATION_PATH, "**/*.{yml,mdx}"));

  // first stage
  await Promise.all(
    files.map(async file => {
      const { dir, name } = path.parse(file);
      const relativePath = omitNumbers(path.relative(DOCUMENTATION_PATH, path.join(dir, name)));

      if (name === "meta") {
        const { title, type, description } = yaml.load(await fsx.readFile(file, "utf-8"));
        const metaFolder = await fsx.readdir(file.split("/").slice(0, -1).join("/"), "utf-8");
        const hasReactTab = metaFolder.filter(v => v.match(/react.mdx/)).length;

        _.set(structure, relativePath.split(path.sep), {
          title,
          type,
          description,
          hasReactTab: hasReactTab > 0,
        });
      } else {
        const { data } = matter(await fsx.readFile(file, "utf-8"));

        _.set(structure, relativePath.split(path.sep), data);
      }
    }),
  );

  // second stage
  const allPages = createPages(structure);

  // derive overview pages by recursively looping through pages that have nested pages
  // this way we're essentially flattening the pages to be only one level deep
  const overviewPages = (function reduceNestedPages(pages, acc) {
    pages.forEach(page => {
      if (!page.pages) return;
      acc.push({
        ...page,
        // keep pages nested only one level deep
        pages: page.pages.map(p => _.omit(p, ["pages"])),
      });
      reduceNestedPages(page.pages, acc);
    });
    return acc;
  })(allPages, []);

  return overviewPages;
}

module.exports = {
  getOverviewPages,
};
