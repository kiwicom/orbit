import _ from "lodash";
import { DesignToken } from "style-dictionary";

export const nameNOVKebab = {
  name: "name/ti/kebab",
  type: "name",
  transformer: (prop: DesignToken): string => {
    const {
      attributes: { object, variant, subVariant, name },
    } = prop;
    if (typeof name === "undefined") {
      return _.kebabCase(Object.values({ object, variant, subVariant }).filter(Boolean).join(" "));
    }

    return String(name);
  },
};

export const nameUppercase = {
  name: "name/ti/uppercase",
  type: "name",
  transformer: (prop: DesignToken): string => {
    const {
      attributes: { object, variant, subVariant, name },
    } = prop;

    if (typeof name === "undefined") {
      return Object.values({ object, variant, subVariant })
        .filter(Boolean)
        .map(v => _.upperCase(v.replace("-", "")))
        .join("")
        .replace(/\s/g, "");
    }

    return String(name);
  },
};
