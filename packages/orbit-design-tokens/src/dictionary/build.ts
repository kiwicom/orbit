import SD from "style-dictionary";
import _ from "lodash";

import registerTransforms from "./transforms/index.js";
import registerFormatters from "./formatters/index.js";
import {
  isInternal,
  isNotInternal,
  isDeprecated,
  isNotDeprecated,
  isGlobal,
  isComponentSpecific,
} from "./utils/is.js";

const build = () => {
  registerFormatters(SD);
  registerTransforms(SD);

  SD.registerTransformGroup({
    name: "javascript/foundation",
    transforms: [
      "attribute/nov",
      "attribute/nov/camelCase",
      "attribute/nov/alias",
      "attribute/javascript/type",
      "name/ti/camel",
      "value/javascript",
    ],
  });

  SD.registerTransformGroup({
    name: "javascript/tokens",
    transforms: [
      "attribute/nov",
      "attribute/nov/isReferenced",
      "attribute/nov/camelCase",
      "attribute/javascript/type",
      "attribute/javascript",
      "value/nov/alias",
      "value/javascript",
      "name/ti/camel",
    ],
  });

  SD.registerTransformGroup({
    name: "css/tokens",
    transforms: ["attribute/nov", "name/ti/kebab", "value/color/rgb"],
  });

  const SDExtended = SD.extend({
    source: ["src/dictionary/definitions/**/*.json"],
    platforms: {
      "json/deprecated-tokens": {
        transformGroup: "javascript/tokens",
        buildPath: "output/",
        files: [
          {
            destination: "deprecated-tokens.json",
            format: "json/deprecated-tokens",
            filter: _.overEvery([isNotInternal, isDeprecated]),
          },
        ],
      },
      "json/documentation-tokens": {
        transforms: ["attribute/nov", "name/ti/camel"],
        buildPath: "output/",
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
      json: {
        buildPath: "dist/",
        transforms: ["attribute/nov", "name/ti/camel", "value/color/rgb"],
        files: [
          {
            destination: "tokens.json",
            format: "json/output-old",
            filter: isNotInternal,
          },
        ],
      },
      css: {
        transformGroup: "css/tokens",
        buildPath: "output/",
        files: [
          {
            destination: "tokens.scss",
            format: "css/tokens",
            filter: isNotInternal,
          },
          {
            destination: "tokens.css",
            format: "css/variables",
            filter: isNotInternal,
          },
          {
            destination: "tokens.less",
            format: "less/variables",
            filter: isNotInternal,
          },
          {
            destination: "tokens.styl",
            format: "stylus/variables",
            filter: isNotInternal,
          },
        ],
      },
      "javascript/foundation": {
        transformGroup: "javascript/foundation",
        buildPath: "src/",
        files: [
          {
            destination: "js/defaultFoundation.ts",
            format: "typescript/foundation",
            filter: isInternal,
          },
        ],
      },
      "javascript/tokens": {
        transformGroup: "javascript/tokens",
        buildPath: "src/",
        files: [
          {
            destination: "js/createTokens.ts",
            format: "typescript/tokens",
            filter: isNotInternal,
          },
        ],
      },
      "xml/tokens": {
        transforms: ["attribute/nov", "attribute/spacing", "name/ti/camel", "size/px"],
        buildPath: "output/",
        files: [
          {
            destination: "tokens.xml",
            format: "xml/tokens",
            filter: isNotInternal,
          },
        ],
      },
    },
  });

  SDExtended.buildAllPlatforms();
};

build();
