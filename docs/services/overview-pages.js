const globby = require("globby");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const matter = require("gray-matter");
const _ = require("lodash");

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

function getExactPath(file) {
  const entirePath = omitNumbers(file).split("/");
  return entirePath.slice(entirePath.indexOf("documentation") + 1, entirePath.length);
}

async function createOverviewPages() {
  const structure = {};

  const files = await globby(path.join(process.cwd(), "src/documentation"), {
    expandDirectories: {
      extensions: ["yml", "mdx"],
    },
  });

  files.forEach(file => {
    const p = getExactPath(file);
    if (p.includes("meta.yml")) {
      const { title, type, description } = yaml.load(fs.readFileSync(file));
      const metaPath = p.map(n => n.replace(".yml", ""));
      _.set(structure, metaPath, { title, type, description });
    } else {
      const filePath = p.map(n => n.replace(".mdx", ""));
      const { data } = matter(fs.readFileSync(file, "utf-8"));
      _.set(structure, filePath, data);
    }
  });

  return createPages(structure);
}

module.exports = {
  createOverviewPages,
};
