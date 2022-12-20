import { path, fs, globby, $ } from "zx";
import { JSDOM } from "jsdom";
import capitalize from "capitalize";
import camelcase from "camelcase";
import { types as t } from "@babel/core";
import { transform } from "@svgr/core";
import svgoPlugin from "@svgr/plugin-svgo";
import jsxPlugin from "@svgr/plugin-jsx";
import prettierPlugin from "@svgr/plugin-prettier";
import filedirname from "filedirname";

// @ts-expect-error FIXME: currently ts has some issue with importing mts ext
import { getProperty, getHTMLComments } from "../checkIcons.mts";
// @ts-expect-error FIXME: currently ts has some issue with importing mts ext
import { NAMES as ILLUSTRATION_NAMES } from "../../src/Illustration/consts.mts";
// @ts-expect-error FIXME: currently ts has some issue with importing mts ext
import { NAMES as AIRPORT_ILLUSTRATION_NAMES } from "../../src/AirportIllustration/consts.mts";

const randomId = () => Math.random().toString(36).substring(2, 9);

(async () => {
  const files = await globby("src/icons/svg/*.svg");
  const [, __dirname] = filedirname();

  const names = files.map(inputFileName => {
    const baseName = path.basename(inputFileName).replace(/( \(custom\))?\.svg$/, "");
    const functionName = capitalize(camelcase(baseName), true);
    const outputComponentFileName = `${functionName}.tsx`;

    return {
      inputFileName,
      outputComponentFileName,
      functionName,
      baseName,
    };
  });

  const componentPath = path.join(__dirname, "../../", "src", "icons");
  await $`mkdir -p ${componentPath}`;

  function getViewBox(attributes: NamedNodeMap) {
    return getProperty(attributes, "viewBox", "0 0 24 24");
  }

  const template = ({ componentName, jsx }, { tpl }) => {
    const viewBox = getViewBox(jsx.openingElement.attributes);
    const iconPath = t.jsxFragment(t.jsxOpeningFragment(), t.jsxClosingFragment(), jsx.children);
    const iconViewbox = typeof viewBox === "string" ? t.stringLiteral(viewBox) : "";
    const iconName = t.stringLiteral(componentName);

    return tpl`
    /* eslint-disable */
    import * as React from "react";

    import createIcon from "../Icon/createIcon";

    export default createIcon(${iconPath}, ${iconViewbox}, ${iconName});
    `;
  };

  const flowTemplate = (functionName: string) => `// @flow
import * as React from "react";

import type { Props } from "../Icon";

export type ${functionName}Type = React.ComponentType<Props>;

declare export default ${functionName}Type;
  `;

  const typescriptTemplate = (functionName: string) => `
import * as React from "react";

import { Props } from "../Icon/types";

declare const ${functionName}: React.FunctionComponent<Props>;

export { ${functionName}, ${functionName} as default };
  `;

  names.forEach(async ({ inputFileName, outputComponentFileName, functionName }) => {
    const dom = await JSDOM.fromFile(inputFileName);
    const content = dom.window.document.querySelector("svg");

    if (content) {
      transform(
        content.outerHTML,
        {
          plugins: [svgoPlugin, jsxPlugin, prettierPlugin],
          svgoConfig: {
            plugins: ["preset-default", { name: "prefixIds", params: { prefix: randomId() } }],
          },
          svgProps: { viewBox: getViewBox(content.attributes) || "" },
          template,
        },
        { componentName: functionName },
      )
        .then(code => {
          fs.writeFileSync(path.join(componentPath, outputComponentFileName), code);
        })
        .catch(err => console.error(err));
    }

    // write Flow declaration for every icon
    fs.writeFileSync(
      path.join(componentPath, `${outputComponentFileName.replace(/\.tsx?/, ".js")}.flow`),
      flowTemplate(functionName),
    );

    // write TypeScript declaration for every icon
    fs.writeFileSync(
      path.join(componentPath, `${outputComponentFileName.replace(/\.tsx?/, "")}.d.ts`),
      typescriptTemplate(functionName),
    );
  });

  const index = names
    .map(
      ({ functionName }) => `export { default as ${functionName}
} from "./${functionName}"; \n`,
    )
    .join("");

  fs.writeFileSync(path.join(componentPath, "index.ts"), index);

  const flow = `// @flow
import * as React from "react";\n\n`;

  const TSHeader = `// Type definitions for @kiwicom/orbit-components
// Project: https://github.com/kiwicom/orbit/\n`;

  const iconMapper = (interpolation: (param: string) => string) =>
    names.map(({ functionName }) => interpolation(functionName)).join("");

  fs.writeFileSync(
    path.join(componentPath, "index.js.flow"),
    flow +
      iconMapper((name: string) => `import type { ${name}Type } from "./${name}";\n`) +
      iconMapper((name: string) => `declare export var ${name}: ${name}Type;\n`),
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
            const comments = getHTMLComments(content);
            const url = `https://raw.githubusercontent.com/kiwicom/orbit/master/packages/orbit-components/src/icons/svg/${baseName}.svg`;
            const dom = JSDOM.fragment(content);
            const svg = dom.querySelector("svg")?.outerHTML;
            resolve({ [baseName]: { ...comments, svg, url } });
          });
        }),
    ),
  ).then(data =>
    fs.writeFileSync(
      path.join(__dirname, "../../", "src", "data", "icons.json"),
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
    path.join(__dirname, "../../", "src", "data", "illustrations.json"),
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
    path.join(__dirname, "../../", "src", "data", "airportIllustrations.json"),
    JSON.stringify(airportIllustrationsJSON),
  );
})();
