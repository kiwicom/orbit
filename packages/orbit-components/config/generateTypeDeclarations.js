// @flow
import path from "path";
import fs from "fs";

import { NAMES as ILLUSTRATION_NAMES } from "../src/Illustration/consts";
import { NAMES as AIRPORT_ILLUSTRATION_NAMES } from "../src/AirportIllustration/consts";
import { NAME_OPTIONS as SERVICE_LOGOS_NAMES } from "../src/ServiceLogo/consts";
import { NAME_OPTIONS as FEATURE_ICONS_NAMES } from "../src/FeatureIcon/consts";

const generateTypeFile = async (templatePath, replacements) => {
  const TEMPLATE = await fs.readFileSync(templatePath, "utf8");
  const suffixArray = templatePath.split(".");
  const suffix = suffixArray[suffixArray.length - 1];

  const replacedTemplate = Object.keys(replacements).reduce(
    (acc, cur) => acc.replace(new RegExp(`%${cur}%`, "g"), replacements[cur]),
    TEMPLATE,
  );

  await fs.writeFileSync(
    path.join(path.dirname(templatePath), suffix === "flow" ? "index.js.flow" : "index.d.ts"),
    replacedTemplate,
  );
};

const templateFiles = [
  [
    path.join(__dirname, "..", "src", "AirportIllustration", "FLOW_TEMPLATE.flow"),
    AIRPORT_ILLUSTRATION_NAMES,
  ],
  [
    path.join(__dirname, "..", "src", "AirportIllustration", "TYPESCRIPT_TEMPLATE.template"),
    AIRPORT_ILLUSTRATION_NAMES,
  ],
  [path.join(__dirname, "..", "src", "Illustration", "FLOW_TEMPLATE.flow"), ILLUSTRATION_NAMES],
  [
    path.join(__dirname, "..", "src", "Illustration", "TYPESCRIPT_TEMPLATE.template"),
    ILLUSTRATION_NAMES,
  ],
  [
    path.join(__dirname, "..", "src", "ServiceLogo", "FLOW_TEMPLATE.flow"),
    Object.values(SERVICE_LOGOS_NAMES),
  ],
  [
    path.join(__dirname, "..", "src", "ServiceLogo", "TYPESCRIPT_TEMPLATE.template"),
    Object.values(SERVICE_LOGOS_NAMES),
  ],
  [
    path.join(__dirname, "..", "src", "FeatureIcon", "FLOW_TEMPLATE.flow"),
    Object.values(FEATURE_ICONS_NAMES),
  ],
  [
    path.join(__dirname, "..", "src", "FeatureIcon", "TYPESCRIPT_TEMPLATE.template"),
    Object.values(FEATURE_ICONS_NAMES),
  ],
];

templateFiles.forEach(arr => {
  generateTypeFile(arr[0], {
    NAMES: `${arr[1].map(item => `\n  | "${String(item)}"`).join("")};`,
  });
});
