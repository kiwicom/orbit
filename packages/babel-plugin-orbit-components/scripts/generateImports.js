// @noflow
const orbits = require("@kiwicom/orbit-components");
const icons = require("@kiwicom/orbit-components/icons");
const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

const fileContent = `// @flow

import { ${Object.keys(orbits)
  .filter(n => n !== "__esModule")
  .join(",")} } from "@kiwicom/orbit-components";
import { ${Object.keys(icons)
  .filter(n => n !== "__esModule")
  .map(name => `${name} as ${name}Icon`)
  .join(",")} } from "@kiwicom/orbit-components/icons";
`;

const fixturePath = path.join(__dirname, "..", "__fixtures__");

if (!fs.existsSync(fixturePath)) {
  fs.mkdirSync(fixturePath, { recursive: true });
}

fs.writeFileSync(
  path.join(fixturePath, "index.js"),
  prettier.format(fileContent, { filepath: "index.js" }),
);
