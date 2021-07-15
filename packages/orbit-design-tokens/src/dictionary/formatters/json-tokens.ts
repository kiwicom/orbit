import { Property } from "style-dictionary";
import * as _ from "lodash";

import { getValue } from "../utils/get";
import { isBorderRadius, isBoxShadow, isDuration, isOpacity, isSize, isSpacing } from "../utils/is";
import { falsyString, flattenSpacing, pixelized } from "../utils/string";
import transparentColor from "../../js/transparentColor";

const getDeprecatedToken = deprecatedToken => {
  if (deprecatedToken) {
    return deprecatedToken.name;
  }
  return null;
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

const docsTokens = {
  name: "json/documentation-tokens",
  formatter: ({ allProperties }: { allProperties: Property[] }): string => {
    const resolveJavascriptValue = prop => {
      const { name, attributes, value } = prop;
      if (isSpacing(prop)) {
        const { spacing } = attributes;
        return flattenSpacing(name, spacing)
          .map(v => pixelized(v, false))
          .join(" ");
      }
      if (isBoxShadow(prop)) {
        /*
          TODO: this could be united, doubled implementation on more places (how to get the values, and how to flatten them)
         */
        const { "box-shadow": boxShadow } = attributes;
        const boxShadowArray = Array.isArray(boxShadow) ? boxShadow : [boxShadow];
        return boxShadowArray
          .map(def => {
            const { x, y, blur, spread, color, opacity, inset } = def;
            const dimensions = [x, y, blur, spread].map(val => pixelized(val, false));
            const colorValue = opacity ? transparentColor(String(getValue(color)), opacity) : color;
            return [inset && "inset", ...dimensions, colorValue].filter(Boolean).join(" ");
          })
          .join(", ");
      }
      const finalValue = getValue(prop);
      /*
        TODO: we could maybe use transformers here, so it's not doubled
       */
      if (isSize(prop)) return pixelized(finalValue, false);
      if (isOpacity(prop)) return String(Number(finalValue) / 100);
      if (isDuration(prop)) return String(`${Number(finalValue) / 1000}s`);
      if (isBorderRadius(prop)) return pixelized(finalValue, false);
      return getValue(value);
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

    const getAndResolveValue = (platform, prop) => {
      if (platform === "javascript") return resolveJavascriptValue(prop);
      if (platform === "foundation") return resolveFoundationValue(prop);
      return null;
    };

    const resolvePlatformName = prop => {
      return prop.name;
    };
    const tokens = allProperties.map(prop => {
      const {
        type,
        name,
        comment,
        category,
        deprecated,
        attributes: { namespace, object, variant, subVariant },
      } = prop;
      const docsPlatforms = ["javascript", "foundation"];
      const platforms = docsPlatforms.map(platform => {
        return {
          [platform]: {
            name: resolvePlatformName(prop),
            value: getAndResolveValue(platform, prop),
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

export default { jsonDeprecatedTokens, docsTokens, docsCategories };
