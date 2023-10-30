import { path, fs } from "zx";
import filedirname from "filedirname";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import { NAMES as ILLUSTRATION_NAMES } from "../src/Illustration/consts.mjs";
import { NAMES as AIRPORT_ILLUSTRATION_NAMES } from "../src/AirportIllustration/consts.mjs";
import { NAME_OPTIONS as SERVICE_LOGOS_NAMES } from "../src/ServiceLogo/consts.mjs";
import { NAME_OPTIONS as FEATURE_ICONS_NAMES } from "../src/FeatureIcon/consts.mjs";

const [, __dirname] = filedirname();

const PALETTE_TOKENS = Object.keys(defaultTokens).filter(token => token.startsWith("palette"));

const removePalettePrefix = (token: string) => {
  const newToken = token.replace("palette", "");
  return newToken.charAt(0).toLowerCase() + newToken.slice(1);
};

const generateTypeFile = async (templatePath: string, replacements: Record<string, string>) => {
  const TEMPLATE = fs.readFileSync(templatePath, "utf8");

  const replacedTemplate = Object.keys(replacements).reduce(
    (acc, cur) => acc.replace(new RegExp(`%${cur}%`, "g"), replacements[cur]),
    TEMPLATE,
  );

  fs.writeFileSync(path.join(path.dirname(templatePath), "types.d.ts"), replacedTemplate);
};

const templateIllustrationFiles = [
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

const templateTokensColors = [
  {
    path: path.join(__dirname, "..", "src", "Box", "TYPESCRIPT_TEMPLATE.template"),
    tokens: Object.values(PALETTE_TOKENS).map(token => removePalettePrefix(token)),
  },
];

templateIllustrationFiles.forEach(arr => {
  generateTypeFile(arr.path, {
    NAMES: `${arr.names.map(item => `\n  | "${String(item)}"`).join("")};`,
  });
});

templateTokensColors.forEach(arr => {
  generateTypeFile(arr.path, {
    TOKENS: `${arr.tokens.map(item => `\n  | "${String(item)}"`).join("")};`,
  });
});
