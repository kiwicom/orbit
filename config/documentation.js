// @flow
import fs from "fs";
import path from "path";
import table from "markdown-table";

import {
  NAMES as ILLUSTRATION_NAMES,
  SIZE_OPTIONS as ILLUSTRATION_SIZES,
} from "../src/Illustration/consts";

const generateDocumentation = async (templatePath, replacements) => {
  const TEMPLATE = await fs.readFileSync(templatePath, "utf8");

  const replacedTemplate = Object.keys(replacements).reduce(
    (acc, cur) => acc.replace(new RegExp(`%${cur}%`, "g"), replacements[cur]),
    TEMPLATE,
  );

  await fs.writeFileSync(path.join(path.dirname(templatePath), "README.md"), replacedTemplate);
};

const illustrationEnums = {
  name: ILLUSTRATION_NAMES,
  size: Object.values(ILLUSTRATION_SIZES),
};

// Add table header
let illustrationResults = [];

Object.keys(illustrationEnums).map((property, propertyIndex) => {
  illustrationEnums[property].map((value, rowIndex) => {
    if (!illustrationResults[rowIndex]) {
      illustrationResults[rowIndex] = [];
    }
    illustrationResults[rowIndex][propertyIndex] = `\`"${value}"\``;
    return [];
  });
  return [];
});

illustrationResults = [Object.keys(illustrationEnums), ...illustrationResults];

generateDocumentation(path.join(__dirname, "..", "src", "Illustration", "README_TEMPLATE.md"), {
  ENUM: table(illustrationResults),
});
