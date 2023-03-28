// eslint-disable-next-line import/no-extraneous-dependencies
import remark from "remark";
import mdx from "remark-mdx";
import visit from "unist-util-visit";
import { fs, path } from "zx";

const headings = () => tree => {
  visit(tree, "heading", node => {
    // eslint-disable-next-line no-param-reassign
    if (node.depth !== 6) node.depth += 1;
  });
};

(async () => {
  try {
    const file = await fs.readFile(
      path.resolve(__dirname, "../../packages/orbit-components/CHANGELOG.md"),
    );

    const contents = await remark().use(mdx).use(headings).process(file);
    const output = contents.toString().replace("## Change Log", "");

    await fs.writeFile(`${__dirname}/../src/data/log.md`, output, "utf8");
  } catch (err) {
    console.error(err);
  }
})();
