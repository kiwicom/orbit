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
    camelcase(
      path
        .basename(inputFileName)
        .replace(/( \(custom\))?\.svg$/, "")
        .replace(/^ icn-/, ""),
    ),
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
  const shapes = dom.window.document.querySelector("defs").innerHTML;

  const svg = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height="24" fill="#bac7d5">
      <g>
        ${shapes}
      </g>
    </svg>`;

  const optimizationResult = await svgo.optimize(svg);
  const optimizedSvg = optimizationResult.data;

  const component = `/* eslint-disable */
    import * as React from "react";
 
    export default function ${functionName}(props) {
      return (
        ${optimizedSvg.replace(/<svg(\s[^>]*)>/, "<svg$1 {...props}>")}
      );
    }
`;

  fs.writeFileSync(path.join(componentPath, outputComponentFileName), component);

  const png = await svg2png(optimizedSvg);
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
