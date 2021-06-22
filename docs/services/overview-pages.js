const globby = require("globby");
const fs = require("fs");
const yaml = require("js-yaml");
const matter = require("gray-matter");
const _ = require("lodash");
const path = require("path");

const { omitNumbers } = require("../utils/document");

function createPages(obj, slug) {
  return Object.entries(obj).map(([key, value]) => {
    if (typeof value === "object") {
      const entirePath = [slug, key].join("/");

      if (!value.meta) {
        if (value.type) return "";
        return { slug: entirePath, ...value };
      }

      if (value.meta.type === "tabs") {
        return {
          slug: entirePath,
          title: value.meta.title,
          description: value.meta.description,
        };
      }

      const pages = createPages(value, entirePath).filter(Boolean);

      if (pages.length > 0) {
        return {
          slug: entirePath,
          title: value.meta.title,
          description: value.meta.description,
          pages,
        };
      }

      const parsePages = Object.keys(value)
        .map(k => ({ title: _.startCase(_.toLower(k)) }))
        .filter(k => k !== "meta");

      return {
        slug: entirePath,
        title: value.meta.title,
        pages: parsePages,
      };
    }

    return null;
  });
}

const renderOverviewPages = (allPages, callback) => {
  allPages.forEach(page => {
    const { pages } = page;
    if (!pages) return undefined;
    callback(page);
    return renderOverviewPages(pages, callback);
  });
};

async function createOverviewPages(callback) {
  const structure = {};

  const files = await globby(path.join(__dirname, "../src/documentation/**/*.{yml,mdx}"));

  files.forEach(file => {
    const wholePath = omitNumbers(file)
      .replace(/\.[^/.]+$/, "")
      .split("/");

    const ommitedPath = wholePath.slice(wholePath.indexOf("documentation") + 1, wholePath.length);

    if (ommitedPath.includes("meta")) {
      const { title, type, description } = yaml.load(fs.readFileSync(file));
      _.set(structure, ommitedPath, { title, type, description });
    } else {
      const { data } = matter(fs.readFileSync(file, "utf-8"));
      _.set(structure, ommitedPath, data);
    }
  });

  return renderOverviewPages(createPages(structure), callback);
}

module.exports = {
  createOverviewPages,
};
