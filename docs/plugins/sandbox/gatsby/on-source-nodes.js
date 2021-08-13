const globby = require("globby");
const fs = require("fs-extra");
const path = require("path");
const { format } = require("prettier");
const parserTypeScript = require("prettier/parser-typescript");

const { getScope, omitTypes, getByName } = require("./helpers");

module.exports = async ({ actions, createNodeId, createContentDigest }, { path: folder }) => {
  try {
    const { createNode } = actions;
    const files = await globby(`${folder}/**/*.tsx`);

    files.forEach(file => {
      const { name } = path.parse(file);

      const exampleFolder = path.dirname(file).split("/").slice(-1).join("").toLowerCase();
      const content = fs.readFileSync(file, "utf-8");
      const id = [exampleFolder, "-", name.toLowerCase()].join("");
      const scope = getScope(content);
      const example = getByName(content, "Example");
      const knobs = getByName(content, "knobs");

      const code = format(omitTypes(example[0]), {
        parser: "typescript",
        plugins: [parserTypeScript],
      });

      const data = {
        example_id: id,
        example: code,
        absolutePath: file,
        scope,
        knobs: knobs[0] || [],
      };

      createNode({
        ...data,
        id: createNodeId(`example-${data.example_id}`),
        parent: null,
        children: [],
        internal: {
          type: `Example`,
          content: JSON.stringify(data),
          contentDigest: createContentDigest(data),
        },
      });
    });
  } catch (err) {
    console.error(err);
  }
};
