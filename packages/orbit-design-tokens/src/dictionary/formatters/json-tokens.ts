import { Property } from "style-dictionary";
import * as _ from "lodash";

import { getValue } from "../utils/get";
import {
  isBorderRadius,
  isBoxShadow,
  isBreakpoint,
  isColor,
  isSize,
  isSpacing,
  isZIndex,
  isTextDecoration,
} from "../utils/is";
import { falsyString, flattenSpacing, pixelized } from "../utils/string";
import { resolveValue } from "./helpers";

const getDeprecatedToken = deprecatedToken => {
  if (deprecatedToken) {
    return deprecatedToken.name;
  }
  return null;
};

const foundationAliasValueGetter = (value: Property) => {
  if (typeof value === "object") {
    const { namespace, object, variant, subVariant } = value.attributes;
    return [namespace, object, variant, subVariant]
      .filter(Boolean)
      .map(val => _.camelCase(String(val)))
      .join(".");
  }
  return getValue(value);
};

const resolveFoundationValue = prop => {
  const { attributes } = prop;
  if (isSpacing(prop)) {
    const { spacing } = attributes;
    return flattenSpacing(prop.name, spacing, foundationAliasValueGetter)
      .map(val =>
        !/[\d]+px/g.test(String(val)) && String(val) !== "0" ? pixelized(val, false) : val,
      )
      .join(" ");
  }
  if (isBoxShadow(prop)) {
    const { "box-shadow": boxShadow } = attributes;
    const boxShadowArray = Array.isArray(boxShadow) ? boxShadow : [boxShadow];
    return boxShadowArray
      .map(def => {
        const { x, y, blur, spread, color, opacity, inset } = def;
        const dimensions = [x, y, blur, spread].map(val => pixelized(val, false));
        const colorAlias = [
          "color",
          "(",
          foundationAliasValueGetter(color),
          falsyString(opacity, `, opacity: `),
          opacity,
          ")",
        ]
          .filter(Boolean)
          .join("");
        return [inset && "inset", ...dimensions, colorAlias].filter(Boolean).join(" ");
      })
      .join(", ");
  }
  /*
    TODO: this might be replaced by different solution, getting from attributes
    Because we parse etc. everything but because of attribute/nov it's already there everything
   */
  if (prop.original && prop.original.value && /[{}]+/g.test(prop.original.value)) {
    return prop.original.value
      .match(/[^{}]+/g)[0]
      .split(".")
      .filter(Boolean)
      .map(val => _.camelCase(val))
      .join(".");
  }
  return "none";
};

const getAndResolveValue = (prop, platform) => {
  if (platform === "foundation") return resolveFoundationValue(prop);
  return resolveValue(prop, platform);
};

const resolvePlatformName = (prop, platform) => {
  if (platform === "scss") {
    return `$${_.kebabCase(prop.name)}`;
  }
  return prop.name;
};

const jsonDeprecatedTokens = {
  name: "json/deprecated-tokens",
  formatter: ({ allProperties }: { allProperties: Property[] }): string => {
    const deprecatedTokens = allProperties.map(prop => {
      const { name } = prop;
      const { "deprecated-replace": deprecatedReplace, "deprecated-version": version } = prop;
      const replaceForToken = getDeprecatedToken(deprecatedReplace);
      return {
        [name]: {
          replaceForToken,
          version,
        },
      };
    });
    return JSON.stringify(Object.assign({}, ...deprecatedTokens), null, 2);
  },
};

const getTokenCategory = prop => {
  const { name, category } = prop;
  if (isColor(prop) && name.startsWith("background")) {
    return "Background colors";
  }
  if (isColor(prop) && name.startsWith("borderColor")) {
    return "Border color";
  }
  if (isColor(prop) && name.startsWith("palette")) {
    return "Color palette";
  }
  if (name.startsWith("opacity")) {
    return "Opacity";
  }
  if (isSize(prop) && category === "typography") {
    return "Font size";
  }
  if (name.startsWith("fontWeight") && category === "typography") {
    return "Font weight";
  }
  if (name.startsWith("lineHeight") && category === "typography") {
    return "Line height";
  }
  if (isTextDecoration(prop)) {
    return "Text decoration";
  }
  if (isSpacing(prop)) {
    return "Spacing";
  }
  if (isBorderRadius(prop)) {
    return "Border radius";
  }
  if (isZIndex(prop)) {
    return "Z Index";
  }
  if (isBoxShadow(prop)) {
    return "Box shadow";
  }
  if (isSize(prop)) {
    return "Size (width, height)";
  }
  if (isBreakpoint(prop)) {
    return "Breakpoints";
  }
  if (isColor(prop)) {
    return "Colors";
  }
  return null;
};

const jsonOld = {
  name: "json/old",
  formatter: ({ allProperties }: { allProperties: Property[] }): string => {
    const props = allProperties.map(prop => {
      const { name } = prop;
      const value = resolveValue(prop, "javascript");
      return {
        [name]: {
          value,
          type: typeof value,
          category: getTokenCategory(prop),
        },
      };
    });
    return JSON.stringify({ props: Object.assign({}, ...props) }, null, 2);
  },
};

const jsonOutputOld = {
  name: "json/output-old",
  formatter: ({ allProperties }: { allProperties: Property[] }): string => {
    const props = allProperties.map(prop => {
      const { name } = prop;
      const value = resolveValue(prop, "javascript");
      return {
        [name]: value,
      };
    });
    return JSON.stringify(Object.assign({}, ...props), null, 2);
  },
};

const docsTokens = {
  name: "json/documentation-tokens",
  formatter: ({ allProperties }: { allProperties: Property[] }): string => {
    const tokens = allProperties.map(prop => {
      const {
        type,
        name,
        comment,
        category,
        deprecated,
        attributes: { namespace, object, variant, subVariant },
      } = prop;
      const docsPlatforms = ["javascript", "foundation", "scss"];
      const platforms = docsPlatforms.map(platform => {
        return {
          [platform]: {
            name: resolvePlatformName(prop, platform),
            value: getAndResolveValue(prop, platform),
          },
        };
      });
      return {
        [name]: {
          type,
          category,
          comment,
          deprecated,
          schema: { namespace, object, variant, subVariant },
          ...Object.assign({}, ...platforms),
        },
      };
    });
    return JSON.stringify(Object.assign({}, ...tokens), null, 2);
  },
};

const docsCategories = {
  name: "json/documentation-categories",
  formatter: ({ allProperties }: { allProperties: Property[] }): string => {
    const categories = allProperties
      .map(({ attributes: { object } }) => object)
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
    return JSON.stringify({ categories }, null, 2);
  },
};

export default { jsonDeprecatedTokens, docsTokens, docsCategories, jsonOld, jsonOutputOld };
