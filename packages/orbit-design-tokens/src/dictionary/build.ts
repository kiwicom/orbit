import StyleDictionary from "style-dictionary";
import _ from "lodash";

import registerTransforms from "./transforms";
import registerFormatters from "./formatters";
import {
  isInternal,
  isNotInternal,
  isDeprecated,
  isNotDeprecated,
  isGlobal,
  isComponentSpecific,
} from "./utils/is";

const build = () => {
  registerFormatters(StyleDictionary);
  registerTransforms(StyleDictionary);
  StyleDictionary.registerTransformGroup({
    name: "javascript/foundation",
    transforms: [
      "attribute/nov",
      "attribute/nov/camelCase",
      "attribute/nov/alias",
      "attribute/javascript/type",
      "name/nov/camel",
      "value/javascript",
    ],
  });
  StyleDictionary.registerTransformGroup({
    name: "javascript/tokens",
    transforms: [
      "attribute/nov",
      "attribute/nov/isReferenced",
      "attribute/nov/camelCase",
      "attribute/javascript/type",
      "attribute/javascript",
      "value/nov/alias",
      "value/javascript",
      "name/nov/camel",
    ],
  });
  StyleDictionary.registerTransformGroup({
    name: "xml/tokens",
    transforms: ["attribute/nov", "attribute/spacing", "name/nov/camel", "value/xml"],
  });
  StyleDictionary.registerTransformGroup({
    name: "json/documentation-tokens",
    transforms: ["attribute/nov", "name/nov/camel"],
  });
  StyleDictionary.registerTransformGroup({
    name: "json/documentation-tokens-output",
    transforms: ["attribute/nov", "name/nov/camel", "value/color/rgb"],
  });
  StyleDictionary.registerTransformGroup({
    name: "css/tokens",
    transforms: ["attribute/nov", "name/nov/kebab", "value/color/rgb"],
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
      "json/documentation-tokens": {
        transformGroup: "json/documentation-tokens",
        buildPath: "lib/",
        files: [
          {
            destination: "docs-tokens.json",
            format: "json/documentation-tokens",
            filter: isNotInternal,
          },
          {
            destination: "docs-categories.json",
            format: "json/documentation-categories",
            filter: _.overEvery([isNotInternal, isNotDeprecated, isGlobal]),
          },
          {
            destination: "docs-components.json",
            format: "json/documentation-categories",
            filter: _.overEvery([isNotInternal, isNotDeprecated, isComponentSpecific]),
          },
        ],
      },
      "json/old": {
        transformGroup: "json/documentation-tokens",
        buildPath: "src/theo/",
        files: [
          {
            destination: "theo-spec.json",
            format: "json/old",
            filter: isNotInternal,
          },
        ],
      },
      "json/output-old": {
        transformGroup: "json/documentation-tokens-output",
        buildPath: "output/",
        files: [
          {
            destination: "theo-spec.json",
            format: "json/output-old",
            filter: isNotInternal,
          },
        ],
      },
      "css/output-old": {
        transformGroup: "css/tokens",
        buildPath: "output/",
        files: [
          {
            destination: "theo-spec.scss",
            format: "css/tokens",
            filter: isNotInternal,
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
        files: [
          {
            destination: "index.xml",
            format: "xml/tokens",
            filter: isNotInternal,
          },
        ],
      },
    },
  });
  StyleDictionaryExtended.buildAllPlatforms();
};

build();
