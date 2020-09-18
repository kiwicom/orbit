// @flow

const orbits = require("@kiwicom/orbit-components");
const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

const fileContent = `// @flow

import { ${Object.keys(orbits).join(",")} } from "@kiwicom/orbit-components";`;

const fixturePath = path.join(__dirname, "..", "__fixtures__");

if (!fs.existsSync(fixturePath)) {
  fs.mkdirSync(fixturePath, { recursive: true });
}

fs.writeFileSync(
  path.join(fixturePath, "index.js"),
  prettier.format(fileContent, { filepath: "index.js" }),
);
