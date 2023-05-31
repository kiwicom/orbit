import { path, fs } from "zx";
import filedirname from "filedirname";

import { NAMES as ILLUSTRATION_NAMES } from "../src/Illustration/consts.mjs";
import { NAMES as AIRPORT_ILLUSTRATION_NAMES } from "../src/AirportIllustration/consts.mjs";
import { NAME_OPTIONS as SERVICE_LOGOS_NAMES } from "../src/ServiceLogo/consts.mjs";
import { NAME_OPTIONS as FEATURE_ICONS_NAMES } from "../src/FeatureIcon/consts.mjs";

const [, __dirname] = filedirname();

const generateTypeFile = async (templatePath: string, replacements: Record<string, string>) => {
  const TEMPLATE = fs.readFileSync(templatePath, "utf8");

  const replacedTemplate = Object.keys(replacements).reduce(
    (acc, cur) => acc.replace(new RegExp(`%${cur}%`, "g"), replacements[cur]),
    TEMPLATE,
  );

  fs.writeFileSync(path.join(path.dirname(templatePath), "types.d.ts"), replacedTemplate);
};

const templateFiles = [
  {
    path: path.join(__dirname, "..", "src", "AirportIllustration", "TYPESCRIPT_TEMPLATE.template"),
    names: AIRPORT_ILLUSTRATION_NAMES,
  },
  {
    path: path.join(__dirname, "..", "src", "Illustration", "TYPESCRIPT_TEMPLATE.template"),
    names: ILLUSTRATION_NAMES,
  },
  {
    path: path.join(__dirname, "..", "src", "ServiceLogo", "TYPESCRIPT_TEMPLATE.template"),
    names: Object.values(SERVICE_LOGOS_NAMES),
  },
  {
    path: path.join(__dirname, "..", "src", "FeatureIcon", "TYPESCRIPT_TEMPLATE.template"),
    names: Object.values(FEATURE_ICONS_NAMES),
  },
];

templateFiles.forEach(arr => {
  generateTypeFile(arr.path, {
    NAMES: `${arr.names.map(item => `\n  | "${String(item)}"`).join("")};`,
  });
});
