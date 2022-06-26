import path from "path";
import fs from "fs-extra";

// internal used components
const EXCLUDED = [
  "Translate",
  "Icon",
  "Dictionary",
  "ErrorFormTooltip",
  // used with different import names (probably ask to rename)
  "Toast",
  "SmartPassIllustrations",
  "Seat",
  "Stepper",
];

const getCurrentComponentsList = async () => {
  const componentsPath = path.resolve(__dirname, "../../../../packages/orbit-components/src");
  const components = await fs
    .readdir(componentsPath)
    .then(data =>
      data.filter(n => /^\s*([A-Z]\w*\s*)*$/.test(n)).filter(n => !EXCLUDED.includes(n)),
    );
  return components;
};

export default async function onCreateNode({ node, actions }) {
  if (node.internal.type === "Tracking") {
    const { createNodeField } = actions;
    const currentComponents = await getCurrentComponentsList();

    createNodeField({
      node,
      name: "currentComponents",
      value: currentComponents,
    });
  }
}
