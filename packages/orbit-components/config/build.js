// @noflow

import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";
import capitalize from "capitalize";
import camelcase from "camelcase";
import mkdirp from "mkdirp";
import glob from "glob";
import svgr from "@svgr/core";
import * as t from "@babel/types";

import { getProperty, getHTMLComments } from "./checkIcons";
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

function getViewBox(attributes) {
  return getProperty(attributes, "viewBox", "0 0 24 24");
}

const template = (code, opts, { componentName, jsx }) => {
  const viewBox = getViewBox(jsx.openingElement.attributes);

  const temp = code.template(`
    // @flow
    /* eslint-disable */
    import * as React from "react";
    import createIcon from "../Icon/createIcon";

    export default createIcon(PATH, VIEWBOX, NAME)
  `);

  return temp({
    PATH: t.jsxFragment(t.jsxOpeningFragment(), t.jsxClosingFragment(), jsx.children),
    VIEWBOX: t.stringLiteral(viewBox),
    NAME: t.stringLiteral(componentName.name),
  });
};

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

  svgr(
    content.outerHTML,
    {
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
      svgProps: { viewBox: getViewBox(content.attributes) },
      template,
    },
    { componentName: functionName },
  )
    .then(code => {
      fs.writeFileSync(path.join(componentPath, outputComponentFileName), code);
    })
    .catch(err => console.error(err));

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
          const comments = getHTMLComments(content, baseName);
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
