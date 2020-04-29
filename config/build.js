// @noflow

import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";
import capitalize from "capitalize";
import camelcase from "camelcase";
import mkdirp from "mkdirp";
import glob from "glob";
import svgr from "@svgr/core";

import { NAMES as ILLUSTRATION_NAMES } from "../src/Illustration/consts";
import { NAMES as AIRPORT_ILLUSTRATION_NAMES } from "../src/AirportIllustration/consts";

const files = glob.sync("src/icons/svg/*.svg");

const names = files.map(inputFileName => {
  const baseName = path.basename(inputFileName).replace(/( \(custom\))?\.svg$/, "");
  const functionName = capitalize(camelcase(baseName), true);
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

function getHTMLComments(content) {
  return Object.assign(
    {},
    ...content.match(/<!--([\s\S]*?)-->/gm).map(item => {
      // remove HTML comments and split by colon
      const items = item.replace(/<!--([\s\S]*?)-->/gm, "$1").split(":");
      // one icon has color as character
      const value = items[1] === "" && items[2] === "" ? ":" : items[1];
      return { [items[0]]: value };
    }),
  );
}

function getProperty(attributes, name, defaultValue = null) {
  for (let i = attributes.length - 1; i >= 0; i -= 1) {
    if (attributes[i].name === name) {
      return attributes[i].value;
    }
  }
  return defaultValue;
}
function getViewBox(attributes) {
  return getProperty(attributes, "viewBox", "0 0 24 24");
}

function findFillAttributes(dom, content, name) {
  const comments = getHTMLComments(dom.serialize());
  // only check icons that don't have replacement for icon font
  if (comments && comments.iconFont !== "false" && comments.customColor == null) {
    const prohibitedAttributes = ["fill", "fill-rule"];
    const phrase = attrName =>
      `${attrName} attribute find on ${name} SVG icon. Please delete the ${attrName} or redraw the icon. Otherwise the icon font will be broken.`;

    const findAttrAndThrowErr = node => {
      prohibitedAttributes.forEach(n => {
        if (getProperty(node.attributes, n)) {
          console.error(phrase(n));
          process.exit(1);
        }
      });
    };
    // For the main DOM element
    findAttrAndThrowErr(content);
    // for all the children - paths
    Object.values(content.children).forEach(node => findAttrAndThrowErr(node));
  }
}

const template = (code, config, state) => `
// @flow
/* eslint-disable */
    import * as React from "react";
    import OrbitIcon from "../Icon";
    import type { Props } from "./${state.componentName}.js.flow";
    import whiteListProps from "../Icon/helpers/whiteListProps";

    export default function ${state.componentName}(props: Props) {
      return (
        ${code.replace(
          /<svg\b[^>]* viewBox="(\b[^"]*)".*>([\s\S]*?)<\/svg>/g,
          `<OrbitIcon viewBox="$1" {...whiteListProps(props)}>$2</OrbitIcon>`,
        )}
      );
    };`;

const flowTemplate = `// @flow
import type { Globals } from "../common/common.js.flow";

export type Props = {|
  +color?: "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "critical",
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

const typescriptTemplate = `// @flow
import * as React from "react";

import * as Common from "../common/common.d.ts";

export interface Props extends Common.Global {
  readonly size?: "small" | "medium" | "large";
  readonly color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "info"
    | "success"
    | "warning"
    | "critical";
  readonly className?: string;
  readonly customColor?: string;
  readonly children: React.ReactNode;
  readonly viewBox: string;
  readonly ariaHidden?: boolean;
  readonly reverseOnRtl?: boolean;
  readonly ariaLabel?: string;
}

const Icon: React.FunctionComponent<Props>;
export { Icon, Icon as default };
`;

names.forEach(async ({ inputFileName, outputComponentFileName, functionName }) => {
  const dom = await JSDOM.fromFile(inputFileName);
  const content = dom.window.document.querySelector("svg");
  findFillAttributes(dom, content, inputFileName);
  svgr(
    content.outerHTML,
    { svgAttributes: { viewBox: getViewBox(content.attributes) }, template },
    { componentName: functionName },
  ).then(jsCode => {
    fs.writeFileSync(path.join(componentPath, outputComponentFileName), jsCode);
  });

  // write .js.flow for every icon
  fs.writeFileSync(path.join(componentPath, `${outputComponentFileName}.flow`), flowTemplate);
  // write .d.ts for every icon
  fs.writeFileSync(path.join(componentPath, `${outputComponentFileName}.d.ts`), typescriptTemplate);
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
          const comments = getHTMLComments(content);
          const url = `https://raw.githubusercontent.com/kiwicom/orbit-components/master/src/icons/svg/${baseName}.svg`;
          const dom = JSDOM.fragment(content);
          const svg = dom.querySelector("svg").outerHTML;
          resolve({ [baseName]: { ...comments, svg, url } });
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
const illustrationsJSON = Object.assign(
  {},
  ...ILLUSTRATION_NAMES.map(illustration => ({
    [illustration]: {
      resized: `https://images.kiwi.com/illustrations/0x400/${illustration}-Q85.png`,
      original: `https://images.kiwi.com/illustrations/originals/${illustration}.png`,
    },
  })),
);

fs.writeFileSync(
  path.join(__dirname, "..", "src", "data", "illustrations.json"),
  JSON.stringify(illustrationsJSON),
);

// create airport illustrations json file
const airportIllustrationsJSON = Object.assign(
  {},
  ...AIRPORT_ILLUSTRATION_NAMES.map(illustration => ({
    [illustration]: {
      resized: `https://images.kiwi.com/illustrations/0x400/${illustration}-Q85.png`,
      original: `https://images.kiwi.com/illustrations/originals/${illustration}.png`,
    },
  })),
);

fs.writeFileSync(
  path.join(__dirname, "..", "src", "data", "airportIllustrations.json"),
  JSON.stringify(airportIllustrationsJSON),
);
