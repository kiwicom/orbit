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
const svgo = new SVGO();

names.forEach(async ({ inputFileName, outputComponentFileName, functionName }) => {
  const dom = await JSDOM.fromFile(inputFileName);
  const shapes = dom.window.document.querySelector("svg").innerHTML;
  const svg = `<svg viewBox="0 0 24 24">${shapes}</svg>`;
  const optimizationResult = await svgo.optimize(svg);
  const optimizedSvg = optimizationResult.data;
  const component = `/* eslint-disable */
    import * as React from "react";
    import OrbitIcon from "../Icon";

    export default function ${functionName}(props) {
      const { color, size, customColor, className } = props;
      return (
        ${optimizedSvg.replace(
          /<svg\b[^>]*>(.*?)<\/svg>/g,
          `<OrbitIcon viewBox="0 0 24 24" size={size} color={color} customColor={customColor} className={className}>$1</OrbitIcon>`,
        )}
      );
    }
`;

  fs.writeFileSync(path.join(componentPath, outputComponentFileName), component);
});

const index = names
  .map(({ functionName }) => `export { default as ${functionName} } from "./${functionName}";\n`)
  .join("");
fs.writeFileSync(path.join(componentPath, "index.js"), index);
