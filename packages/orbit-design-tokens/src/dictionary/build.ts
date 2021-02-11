import StyleDictionary from "style-dictionary";
import _ from "lodash";

import registerTransforms from "./transforms";
import registerFormatters from "./formatters";
import { isInternal, isNotInternal, isDeprecated } from "./utils/is";

const build = () => {
  registerFormatters(StyleDictionary);
  registerTransforms(StyleDictionary);
  StyleDictionary.registerTransformGroup({
    name: "javascript/foundation",
    transforms: [
      "attribute/nov",
      "attribute/nov/alias",
      "attribute/nov/type",
      "name/nov/camel",
      "value/spacing/javascript",
      "value/border-radius/javascript",
      "value/string/javascript",
    ],
  });
  StyleDictionary.registerTransformGroup({
    name: "javascript/tokens",
    transforms: [
      "attribute/nov",
      "attribute/nov/isReferenced",
      "attribute/nov/type",
      "value/nov/alias",
      "name/nov/camel",
    ],
  });
  StyleDictionary.registerTransformGroup({
    name: "xml/tokens",
    transforms: ["attribute/nov", "name/nov/camel"],
  });
  const StyleDictionaryExtended = StyleDictionary.extend({
    source: ["src/dictionary/definitions/**/*.json"],
    platforms: {
      "json/deprecated-tokens": {
        transformGroup: "javascript/tokens",
        buildPath: "lib/",
        files: [
          {
            destination: "deprecated-tokens.json",
            format: "json/deprecated-tokens",
            filter: _.overEvery([isNotInternal, isDeprecated]),
          },
        ],
      },
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
      "xml/tokens": {
        transformGroup: "xml/tokens",
        buildPath: "lib/",
        files: [{ destination: "index.xml", format: "xml/tokens", filter: isNotInternal }],
      },
    },
  });
  StyleDictionaryExtended.buildAllPlatforms();
};

build();
