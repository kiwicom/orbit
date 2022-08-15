// eslint-disable-next-line import/no-extraneous-dependencies
import remark from "remark";
import mdx from "remark-mdx";
import path from "path";
import { read, write } from "to-vfile";
import visit from "unist-util-visit";

const headings = () => tree => {
  visit(tree, "heading", node => {
    // @ts-expect-error TODO
    // eslint-disable-next-line no-param-reassign
    if (node.depth !== 6) node.depth += 1;
  });
};

export default async () => {
  try {
    const file = await read(path.resolve(process.cwd(), "packages/orbit-components/CHANGELOG.md"));

    const contents = await remark().use(mdx).use(headings).process(file);
    const output = contents.toString().replace("## Change Log", "");

    await write({
      path: path.resolve(process.cwd(), "docs/src/data", "log.md"),
      contents: output,
    });
  } catch (err) {
    console.error(err);
  }
};
