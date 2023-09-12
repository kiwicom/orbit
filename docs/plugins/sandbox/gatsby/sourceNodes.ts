import globby from "globby";
import fs from "fs-extra";
import path from "path";
import { format } from "prettier";
import * as parserTypescript from "prettier/plugins/typescript";

import { getScope, getByName, getAst } from "./helpers";

export default async (
  { actions, createNodeId, createContentDigest, reporter },
  { path: folder },
) => {
  try {
    const { createNode } = actions;
    const files = await globby(`${folder}/**/*.tsx`);

    files.forEach(async (file: string) => {
      const { name } = path.parse(file);
      const getProperty = (content: string, prop: string) => getByName(getAst(content, file), prop);

      const exampleFolder = path.dirname(file).split("/").slice(-1).join("").toLowerCase();
      const content = fs.readFileSync(file, "utf-8");
      const id = [exampleFolder, "-", name.toLowerCase()].join("");
      const scope = getScope(content, file);
      const example = getProperty(content, "Example");
      const knobCode = getProperty(content, "exampleKnobs");
      const variants = getProperty(content, "exampleVariants");

      const formatSource = (source: string) =>
        format(source, { parser: "json-stringify", quoteProps: "consistent" }).then(res => {
          return res;
        });

      const formattedCode = await formatSource(knobCode);

      // eslint-disable-next-line no-eval
      const knobs = knobCode ? eval(formattedCode) : [];

      const code = await format(example, {
        parser: "typescript",
        plugins: [parserTypescript],
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
