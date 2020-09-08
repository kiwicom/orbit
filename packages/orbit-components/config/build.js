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
  const rawComments = content.match(/<!--([\s\S]*?)-->/gm);
  if (rawComments) {
    return Object.assign(
      {},
      ...rawComments.map(item => {
        // remove HTML comments and split by colon
        const items = item.replace(/<!--([\s\S]*?)-->/gm, "$1").split(":");
        // one icon has color as character
        const value = items[1] === "" && items[2] === "" ? ":" : items[1];
        return { [items[0]]: value };
      }),
    );
  }
  return null;
}

const allIconsCharacters = [];

function getHTMLCommentsWithCheck(content, baseName) {
  const comments = getHTMLComments(content);
  if (!comments || !comments.character) {
    console.error(
      `A character value needs to be present in SVG definition of ${baseName}.svg as HTML comment. Otherwise the icon font build will be broken.`,
    );
    process.exit(1);
  }
  allIconsCharacters.forEach(({ name, char }) => {
    if (char === comments.character) {
      console.error(
        `A character ${comments.character} is already present on ${name} icon. Change the character value on ${baseName}, so it's unique.`,
      );
      process.exit(1);
    }
  });
  allIconsCharacters.push({ name: baseName, char: comments.character });
  return comments;
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
    import createIcon from "../Icon/createIcon";

    export default createIcon(${code.replace(
      /<svg\b[^>]* viewBox="(\b[^"]*)".*>([\s\S]*?)<\/svg>/g,
      `<>$2</>, "$1", "${state.componentName}"`,
    )});`;

const flowTemplate = functionName => `// @flow
import * as React from "react";

import type { Props } from "../Icon";

export type ${functionName}Type = React.ComponentType<Props>;

declare export default ${functionName}Type;
`;

const typescriptTemplate = functionName => `// @flow
import * as React from "react";

import { Props } from "../Icon";

declare const ${functionName}: React.FunctionComponent<Props>;
export { ${functionName}, ${functionName} as default };
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
  fs.writeFileSync(
    path.join(componentPath, `${outputComponentFileName}.flow`),
    flowTemplate(functionName),
  );
  // write .d.ts for every icon
  fs.writeFileSync(
    path.join(componentPath, `${outputComponentFileName.replace(".js", "")}.d.ts`),
    typescriptTemplate(functionName),
  );
});

const index = names
  .map(({ functionName }) => `export { default as ${functionName} } from "./${functionName}";\n`)
  .join("");
fs.writeFileSync(path.join(componentPath, "index.js"), index);

const flow = `// @flow
import * as React from "react";\n\n`;

const TSHeader = `// Type definitions for @kiwicom/orbit-components
// Project: https://github.com/kiwicom/orbit/

declare module "@kiwicom/orbit-components/lib/icons";\n\n`;

const iconMapper = interpolation =>
  names.map(({ functionName }) => interpolation(functionName)).join("");

fs.writeFileSync(
  path.join(componentPath, "index.js.flow"),
  flow +
    iconMapper(name => `import type { ${name}Type } from "./${name}";\n`) +
    iconMapper(name => `declare export var ${name}: ${name}Type;\n`),
);
fs.writeFileSync(
  path.join(componentPath, "index.d.ts"),
  TSHeader + iconMapper(name => `export { ${name} } from "./${name}";\n`),
);

// create icons json file
Promise.all(
  names.map(
    ({ inputFileName, baseName }) =>
      new Promise((resolve, reject) => {
        fs.readFile(inputFileName, "utf8", (err, content) => {
          if (err) reject();
          // only get the HTML comments
          const comments = getHTMLCommentsWithCheck(content, baseName);
          const url = `https://raw.githubusercontent.com/kiwicom/orbit/master/packages/orbit-components/src/icons/svg/${baseName}.svg`;
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
