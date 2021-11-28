// eslint-disable-next-line import/no-extraneous-dependencies
const remark = require("remark");
// eslint-disable-next-line import/no-extraneous-dependencies
const mdx = require("remark-mdx");
const path = require("path");
const { read, write } = require("to-vfile");
const visit = require("unist-util-visit");

const headings = () => tree => {
  visit(tree, "heading", node => {
    // eslint-disable-next-line no-param-reassign
    if (node.depth !== 6) node.depth += 1;
  });
};

module.exports = async () => {
  try {
    const file = await read(
      path.resolve(__dirname, "../../packages/orbit-components/CHANGELOG.md"),
    );

    const { contents } = await remark().use(mdx).use(headings).process(file);
    const output = contents.replace("## Change Log", "");

    await write({
      path: path.resolve(__dirname, "../src/data", "CHANGELOG.md"),
      contents: output,
    });
  } catch (err) {
    console.error(err);
  }
};
