import StyleDictionary from "style-dictionary";

import registerTransforms from "./transforms";
import registerFormatters from "./formatters";
import { isInternal, isNotInternal } from "./utils/is";

const build = () => {
  registerFormatters(StyleDictionary);
  registerTransforms(StyleDictionary);
  StyleDictionary.registerTransformGroup({
    name: "javascript/foundation",
    transforms: [
      "attribute/foundation",
      "attribute/foundation/name",
      "attribute/foundation/type",
      "name/foundation/camel",
      "value/spacing/javascript",
      "value/string/javascript",
    ],
  });
  StyleDictionary.registerTransformGroup({
    name: "javascript/tokens",
    transforms: [
      "attribute/foundation",
      "attribute/foundation/type",
      "value/foundation/alias",
      "name/foundation/camel",
    ],
  });
  const StyleDictionaryExtended = StyleDictionary.extend({
    source: ["src/dictionary/definitions/**/*.json"],
    platforms: {
      "javascript/foundation": {
        transformGroup: "javascript/foundation",
        buildPath: "src/js/",
        files: [
          {
            destination: "defaultFoundation.js.flow",
            format: "flow/foundation",
            filter: isInternal,
          },
          {
            destination: "defaultFoundation.ts",
            format: "typescript/foundation",
            filter: isInternal,
          },
        ],
      },
      "javascript/tokens": {
        transformGroup: "javascript/tokens",
        buildPath: "src/js/",
        files: [
          {
            destination: "createTokens.ts",
            format: "typescript/tokens",
            filter: isNotInternal,
          },
          {
            destination: "createTokens.js.flow",
            format: "flow/tokens",
            filter: isNotInternal,
          },
        ],
      },
    },
  });
  StyleDictionaryExtended.buildAllPlatforms();
};

build();
