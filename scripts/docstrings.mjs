/**
 * Synchronize Orbit component docstrings with README and Accessibility documentation.
 *
 * Scans every component directory in `packages/orbit-components/src/<Component>`.
 * - Reads its `README.md`.
 * - Finds corresponding `03-accessibility.mdx` file under
 *   `docs/src/documentation/03-components/**\/\<component\>\/`.
 *
 * A generated JSDoc block (bounded by `@orbit-doc-start` / `@orbit-doc-end`) is
 * inserted or updated at the top of `index.tsx` (or `index.ts`) for each component.
 *
 * Run: `node scripts/sync-docstrings.mjs` (no transpiler needed).
 */

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

/** Absolute path to component docs root */
const DOCS_ROOT = path.resolve("docs/src/documentation/03-components");
/** Absolute path to components source root */
const COMPONENTS_ROOT = path.resolve("packages/orbit-components/src");

const START_TOKEN = "@orbit-doc-start";
const END_TOKEN = "@orbit-doc-end";

/**
 * Convert PascalCase component name to lowercase slug used in docs folder.
 * Example: Button -> button, InputField -> inputfield
 * @param {string} componentName
 * @returns {string}
 */
function toSlug(componentName) {
  return componentName.toLowerCase();
}

/**
 * Remove YAML front-matter from an MDX file content.
 * @param {string} content
 * @returns {string}
 */
function stripFrontMatter(content) {
  if (content.startsWith("---")) {
    const end = content.indexOf("\n---", 3);
    if (end !== -1) {
      return content.slice(end + 4).trimStart();
    }
  }
  return content;
}

/**
 * Load accessibility MDX (without front-matter) for given component slug.
 * @param {string} slug
 * @returns {Promise<string|null>}
 */
async function loadAccessibilityDoc(slug) {
  const categories = await fs.readdir(DOCS_ROOT, { withFileTypes: true });
  for (const cat of categories) {
    if (!cat.isDirectory()) continue;
    const possible = path.join(DOCS_ROOT, cat.name, slug, "03-accessibility.mdx");
    try {
      const raw = await fs.readFile(possible, "utf8");
      return stripFrontMatter(raw);
    } catch {
      // continue searching
    }
  }
  return null;
}

/**
 * Inject or update generated docstring block for a single component.
 * @param {string} componentName
 */
async function syncComponent(componentName) {
  const slug = toSlug(componentName);
  const componentDir = path.join(COMPONENTS_ROOT, componentName);

  const readmePath = path.join(componentDir, "README.md");
  const readme = await fs.readFile(readmePath, "utf8").catch(() => "");

  const accessibility = (await loadAccessibilityDoc(slug)) ?? "";

  if (!readme && !accessibility) {
    console.warn(`⚠️  No README or accessibility docs for ${componentName}. Skipping.`);
    return;
  }

  const sourceFiles = [path.join(componentDir, "index.tsx"), path.join(componentDir, "index.ts")];

  let componentFile;
  for (const file of sourceFiles) {
    try {
      await fs.access(file);
      componentFile = file;
      break;
    } catch {
      /* ignore */
    }
  }

  if (!componentFile) {
    console.warn(`⚠️  Source file for ${componentName} not found.`);
    return;
  }

  /** @type {string[]} */
  const lines = ["/**", ` * ${START_TOKEN}`];

  if (readme) {
    lines.push(" * README", " * ----------");
    lines.push(...readme.split(/\r?\n/).map(l => ` * ${l.replace(/\*\//g, "*\\/")}`));
    lines.push(" *");
  }

  if (accessibility) {
    lines.push(" * Accessibility", " * -------------");
    lines.push(...accessibility.split(/\r?\n/).map(l => ` * ${l.replace(/\*\//g, "*\\/")}`));
    lines.push(" *");
  }

  lines.push(` * ${END_TOKEN}`, " */", "");

  const newDoc = lines.join("\n");

  let source = await fs.readFile(componentFile, "utf8");

  const startIdx = source.indexOf(START_TOKEN);
  const endIdx = source.indexOf(END_TOKEN);

  if (startIdx !== -1 && endIdx !== -1) {
    // replace existing block
    const pre = source.slice(0, source.lastIndexOf("/*", startIdx));
    const post = source.slice(source.indexOf("*/", endIdx) + 2);
    source = pre + newDoc + post;
  } else {
    // insert just before the component definition (e.g. "const Button =" or "function Button(")
    const componentRegex = new RegExp(
      String.raw`(^|\n)(?:export\s+)?(?:const|function)\s+${componentName}\b`,
      "m",
    );
    const compMatch = source.match(componentRegex);

    if (compMatch && typeof compMatch.index === "number") {
      const insertPos = compMatch.index + compMatch[1].length; // after captured leading newline (if any)
      source = source.slice(0, insertPos) + newDoc + source.slice(insertPos);
    } else {
      // fallback: after optional 'use client' directive, else top of file
      const clientMatch = source.match(/^(?:'use client'|"use client");?\s*\n/);
      if (clientMatch) {
        const insertPos = clientMatch[0].length;
        source = source.slice(0, insertPos) + newDoc + source.slice(insertPos);
      } else {
        source = newDoc + source;
      }
    }
  }

  await fs.writeFile(componentFile, source);
  console.log(`✅ Synced docstring for ${componentName}`);
}

async function main() {
  try {
    const dirents = await fs.readdir(COMPONENTS_ROOT, { withFileTypes: true });
    for (const dirent of dirents) {
      if (dirent.isDirectory()) {
        /* eslint-disable no-await-in-loop */
        await syncComponent(dirent.name);
      }
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}

main();
