// @noflow
/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const fs = require("fs");
const { JSDOM } = require("jsdom");
const capitalize = require("capitalize");
const camelcase = require("camelcase");
const mkdirp = require("mkdirp");
const SVGO = require("svgo");
const glob = require("glob");
const svg2png = require("svg2png");

const files = glob.sync("src/icons/**/*.svg");
const names = files.map(inputFileName => {
  const functionName = capitalize(
    camelcase(path.basename(inputFileName).replace(/( \(custom\))?\.svg$/, "")),
  );
  const outputComponentFileName = `${functionName}.js`;

  return {
    inputFileName,
    outputComponentFileName,
    functionName,
  };
});

const componentPath = path.join(__dirname, "..", "src", "icons");
mkdirp(componentPath);
const pngPath = path.join(__dirname, "..", "src", "icons", "png");
mkdirp(pngPath);
const relativePngPath = pngPath.substring(path.join(__dirname, "..").length);
const svgo = new SVGO();

names.forEach(async ({ inputFileName, outputComponentFileName, functionName }) => {
  const dom = await JSDOM.fromFile(inputFileName);
  const shapes = dom.window.document.querySelector("svg").innerHTML;
  const svg = `<svg viewBox="0 0 24 24">${shapes}</svg>`;
  const optimizationResult = await svgo.optimize(svg);
  const optimizedSvg = optimizationResult.data;
  const component = `/* eslint-disable */
    import * as React from "react";
    import { default as Icon } from "../Icon";

    export default function ${functionName}(props) {
      const { color, size, style } = props;
      return (
        ${optimizedSvg.replace(
          /<svg\b[^>]*>(.*?)<\/svg>/g,
          `<Icon viewBox="0 0 24 24" size={size} color={color} style={style}>$1</Icon>`,
        )}
      );
    }
`;

  fs.writeFileSync(path.join(componentPath, outputComponentFileName), component);

  const png = await svg2png(optimizedSvg, { width: 32, height: 32 });
  fs.writeFileSync(path.join(pngPath, `${functionName}.png`), png);
});

const index = names
  .map(({ functionName }) => `export { default as ${functionName} } from "./${functionName}";\n`)
  .join("");
fs.writeFileSync(path.join(componentPath, "index.js"), index);

const iconsIndex = names
  .map(
    ({ functionName }) =>
      `- ![${functionName}](${relativePngPath}/${functionName}.png?raw=true) ${functionName}\n`,
  )
  .join("");
fs.writeFileSync(path.join(__dirname, "..", "src", "icons", "icons.md"), iconsIndex);
