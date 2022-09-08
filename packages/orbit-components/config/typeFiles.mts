import { path, fs } from "zx";
import filedirname from "filedirname";

// @ts-expect-error TODO
import { NAMES as ILLUSTRATION_NAMES } from "../src/Illustration/consts.mts";
// @ts-expect-error TODO
import { NAMES as AIRPORT_ILLUSTRATION_NAMES } from "../src/AirportIllustration/consts.mts";
// @ts-expect-error TODO
import { NAME_OPTIONS as SERVICE_LOGOS_NAMES } from "../src/ServiceLogo/consts.mts";
// @ts-expect-error TODO
import { NAME_OPTIONS as FEATURE_ICONS_NAMES } from "../src/FeatureIcon/consts.mts";

const [, __dirname] = filedirname();

const generateTypeFile = async (templatePath: string, replacements: Record<string, string>) => {
  const TEMPLATE = fs.readFileSync(templatePath, "utf8");
  // const suffixArray = templatePath.split(".");
  // const suffix = suffixArray[suffixArray.length - 1];

  const replacedTemplate = Object.keys(replacements).reduce(
    (acc, cur) => acc.replace(new RegExp(`%${cur}%`, "g"), replacements[cur]),
    TEMPLATE,
  );

  fs.writeFileSync(path.join(path.dirname(templatePath), "index.d.ts"), replacedTemplate);
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
