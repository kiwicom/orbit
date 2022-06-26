import globby from "globby";
import fsx from "fs-extra";
import yaml from "js-yaml";
import matter from "gray-matter";
import _ from "lodash";
import path from "path";

import { omitNumbers } from "../utils/document";

interface OverviewPage {
  slug: string;
  title: string;
  description: string;
  idx: number;
  hasReactTab: boolean;
  pages?: OverviewPage[];
}

const DOCUMENTATION_PATH = path.resolve(__dirname, "../../src/documentation");

// derive pages with nested pages from given object structure
// this function can probably be simplified further
function createPages(
  pageObj: Record<
    string,
    Record<
      string,
      {
        title: string;
        idx: string;
        hasReactTab: boolean;
        description: string;
        type: "folder" | "Components" | "tabs";
      }
    >
  >,
  slugPiece = "/",
) {
  return Object.entries(pageObj).map(([key, value]) => {
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
          idx: value.meta.idx,
          hasReactTab: value.meta.hasReactTab,
        };
      }

      // @ts-expect-error TODO
      const pages = createPages(value, slug).filter(Boolean);

      if (pages.length > 0) {
        return {
          slug,
          title: value.meta.title,
          idx: value.meta.idx,
          description: value.meta.description,
          pages,
        };
      }

      const parsePages = Object.keys(value)
        .map(k => ({ title: _.startCase(_.toLower(k)) }))
        .filter(k => k.title !== "meta");

      return {
        slug,
        title: value.meta.title,
        pages: parsePages,
      };
    }

    return null;
  });
}

export default async function getOverviewPages() {
  const structure = {};

  // from these files we'll generate a list of pages containing nested pages in two stages
  const files = await globby(path.join(DOCUMENTATION_PATH, "**/*.{yml,mdx}"));

  // first stage
  await Promise.all(
    files.map(async file => {
      const { dir, name } = path.parse(file);
      const folderPath = path.relative(DOCUMENTATION_PATH, path.join(dir, name));
      const relativePath = omitNumbers(folderPath);

      if (name === "meta") {
        const { title, type, description } = yaml.load(await fsx.readFile(file, "utf-8"));
        const metaFolder = await fsx.readdir(file.split("/").slice(0, -1).join("/"), "utf-8");
        const hasReactTab = metaFolder.filter(v => v.match(/react.mdx/)).length;
        const idx = parseFloat(folderPath.split("/").slice(0, -1).slice(-1)[0]);

        _.set(structure, relativePath.split(path.sep), {
          title,
          type,
          idx: Number.isNaN(idx) ? 0 : idx,
          description,
          hasReactTab: hasReactTab > 0,
        });
      } else {
        const { data } = matter(fsx.readFileSync(file, "utf-8"));
        const idx = parseFloat(folderPath.split("/").slice(0, -1).slice(-1)[0]);

        _.set(structure, relativePath.split(path.sep), {
          ...data,
          idx: Number.isNaN(idx) ? 0 : idx,
        });
      }
    }),
  );

  // second stage
  const allPages = createPages(structure);
  // derive overview pages by recursively looping through pages that have nested pages
  // this way we're essentially flattening the pages to be only one level deep
  const overviewPages = (function reduceNestedPages(pages: OverviewPage[], acc: OverviewPage[]) {
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
