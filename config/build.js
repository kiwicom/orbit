// @noflow
/* eslint-disable import/no-extraneous-dependencies */

import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";
import capitalize from "capitalize";
import camelcase from "camelcase";
import mkdirp from "mkdirp";
import glob from "glob";
import svgr from "@svgr/core";

import { NAMES as ILLUSTRATION_NAMES } from "../src/Illustration/consts";

const files = glob.sync("src/icons/**/*.svg");

const names = files.map(inputFileName => {
  const baseName = path.basename(inputFileName).replace(/( \(custom\))?\.svg$/, "");
  const functionName = capitalize(camelcase(baseName));
  const outputComponentFileName = `${functionName}.js`;

  return {
    inputFileName,
    outputComponentFileName,
    functionName,
    baseName,
  };
});

const componentPath = path.join(__dirname, "..", "src", "icons");
mkdirp(componentPath);

function getViewBox(attributes) {
  for (let i = attributes.length - 1; i >= 0; i -= 1) {
    if (attributes[i].name === "viewBox") {
      return attributes[i].value;
    }
  }
  return "0 0 24 24";
}

const template = (code, config, state) => `
// @flow
/* eslint-disable */
    import * as React from "react";
    import OrbitIcon from "../Icon";
    import type { Props } from "./${state.componentName}.js.flow";

    export default function ${state.componentName}(props: Props) {
      const { color, size, customColor, className, dataTest, ariaHidden, ariaLabel, reverseOnRtl } = props;
      return (
        ${code.replace(
          /<svg\b[^>]* viewBox="(\b[^"]*)".*>([\s\S]*?)<\/svg>/g,
          `<OrbitIcon viewBox="$1" size={size} color={color} customColor={customColor} className={className} dataTest={dataTest} ariaHidden={ariaHidden} reverseOnRtl={reverseOnRtl} ariaLabel={ariaLabel}>$2</OrbitIcon>`,
        )}
      );
    };`;

const flowTemplate = `// @flow
import type { Globals } from "../common/common.js.flow";

export type Props = {|
  +color?:
    | "attention"
    | "primary"
    | "secondary"
    | "tertiary"
    | "info"
    | "success"
    | "warning"
    | "critical",
  +size?: "small" | "medium" | "large",
  +customColor?: string,
  +className?: string,
  +ariaHidden?: boolean,
  +reverseOnRtl?: boolean,
  +ariaLabel?: string,
  ...Globals,
|};

declare export default React$ComponentType<Props>;
`;

names.forEach(async ({ inputFileName, outputComponentFileName, functionName }) => {
  const dom = await JSDOM.fromFile(inputFileName);
  const content = dom.window.document.querySelector("svg");
  svgr(
    content.outerHTML,
    { svgAttributes: { viewBox: getViewBox(content.attributes) }, template },
    { componentName: functionName },
  ).then(jsCode => {
    fs.writeFileSync(path.join(componentPath, outputComponentFileName), jsCode);
  });

  // write .js.flow for every icon
  fs.writeFileSync(path.join(componentPath, `${outputComponentFileName}.flow`), flowTemplate);
});

const index = names
  .map(({ functionName }) => `export { default as ${functionName} } from "./${functionName}";\n`)
  .join("");
fs.writeFileSync(path.join(componentPath, "index.js"), index);

const flow = `// @flow
import * as React from "react";\n\n`;

const flowTypes = names
  .map(({ functionName }) => `import typeof ${functionName}Type from "./${functionName}";\n`)
  .join("");

const flowDeclares = names
  .map(({ functionName }) => `declare export var ${functionName}: ${functionName}Type;\n`)
  .join("");

fs.writeFileSync(path.join(componentPath, "index.js.flow"), flow + flowTypes + flowDeclares);

// create icons json file
Promise.all(
  names.map(
    ({ inputFileName, baseName }) =>
      new Promise((resolve, reject) => {
        fs.readFile(inputFileName, "utf8", (err, content) => {
          if (err) reject();
          // only get the HTML comments
          const comments = content.match(/<!--([\s\S]*?)-->/gm).map(item => {
            // remove HTML comments and split by colon
            const items = item.replace(/<!--([\s\S]*?)-->/gm, "$1").split(":");
            // one icon has color as character
            const value = items[1] === "" && items[2] === "" ? ":" : items[1];
            return { [items[0]]: value };
          });
          const commentsObject = Object.assign({}, ...comments);
          const url = `https://raw.githubusercontent.com/kiwicom/orbit-components/master/src/icons/svg/${baseName}.svg`;
          const dom = JSDOM.fragment(content);
          const svg = dom.querySelector("svg").outerHTML;
          resolve({ [baseName]: { ...commentsObject, svg, url } });
        });
      }),
  ),
).then(data =>
  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "icons.json"),
    JSON.stringify(Object.assign({}, ...data)),
  ),
);

// create illustrations json file
const illustrationsJSON = ILLUSTRATION_NAMES.map(illustration => ({
  name: illustration,
  resized: `https://images.kiwi.com/illustrations/0x400/${illustration}.png`,
  original: `https://images.kiwi.com/illustrations/originals/${illustration}.png`,
}));

fs.writeFileSync(
  path.join(__dirname, "..", "src", "data", "illustrations.json"),
  JSON.stringify(illustrationsJSON),
);
