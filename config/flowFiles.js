// @flow
import path from "path";
import fs from "fs";

import { NAMES as ILLUSTRATION_NAMES } from "../src/Illustration/consts";
import { NAME_OPTIONS as SERVICE_LOGOS_NAMES } from "../src/ServiceLogo/consts";
import { NAME_OPTIONS as FEATURE_ICONS_NAMES } from "../src/FeatureIcon/consts";

const generateFlowFile = async (templatePath, replacements) => {
  const TEMPLATE = await fs.readFileSync(templatePath, "utf8");

  const replacedTemplate = Object.keys(replacements).reduce(
    (acc, cur) => acc.replace(new RegExp(`%${cur}%`, "g"), replacements[cur]),
    TEMPLATE,
  );

  await fs.writeFileSync(path.join(path.dirname(templatePath), "index.js.flow"), replacedTemplate);
};

// Illustrations

generateFlowFile(path.join(__dirname, "..", "src", "Illustration", "FLOW_TEMPLATE.flow"), {
  NAMES: `${ILLUSTRATION_NAMES.map(illustrationName => `\n  | "${String(illustrationName)}"`).join(
    "",
  )};`,
});

// ServiceLogos

generateFlowFile(path.join(__dirname, "..", "src", "ServiceLogo", "FLOW_TEMPLATE.flow"), {
  NAMES: `${Object.values(SERVICE_LOGOS_NAMES)
    .map(serviceLogoName => `\n  | "${String(serviceLogoName)}"`)
    .join("")};`,
});

// FeatureIcons

generateFlowFile(path.join(__dirname, "..", "src", "FeatureIcon", "FLOW_TEMPLATE.flow"), {
  NAMES: `${Object.values(FEATURE_ICONS_NAMES)
    .map(featureIcon => `\n  | "${String(featureIcon)}"`)
    .join("")};`,
});
