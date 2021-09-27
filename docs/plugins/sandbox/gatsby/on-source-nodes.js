const globby = require("globby");
const fs = require("fs-extra");
const path = require("path");
const { format } = require("prettier");
const parserTypeScript = require("prettier/parser-typescript");

const { getScope, getByName, getAst } = require("./helpers");

module.exports = async (
  { actions, createNodeId, createContentDigest, reporter },
  { path: folder },
) => {
  try {
    const { createNode } = actions;
    const files = await globby(`${folder}/**/*.tsx`);

    files.forEach(file => {
      const { name } = path.parse(file);
      const getProperty = (content, prop) => getByName(getAst(content), prop);

      const exampleFolder = path.dirname(file).split("/").slice(-1).join("").toLowerCase();
      const content = fs.readFileSync(file, "utf-8");
      const id = [exampleFolder, "-", name.toLowerCase()].join("");
      const scope = getScope(content);
      const example = getProperty(content, "Example");
      const knobCode = getProperty(content, "exampleKnobs");
      const variants = getProperty(content, "exampleVariants");
      const formatSource = source =>
        format(source, { parser: "json-stringify", quoteProps: "consistent" });

      // eslint-disable-next-line no-eval
      const knobs = knobCode ? eval(formatSource(knobCode)) : [];

      const code = format(example, {
        parser: "typescript",
        plugins: [parserTypeScript],
      });

      const data = {
        absolutePath: file,
        example_id: id,
        example: code,
        exampleKnobs: knobs,
        // eslint-disable-next-line no-eval
        exampleVariants: variants ? eval(variants) : [],
        scope,
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
    reporter.panicOnBuild(err);
  }
};
