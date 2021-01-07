// @flow
import { WIDTH_AND_HEIGHT, TOKENS } from "./consts";
import type { ThemeProps, Theme } from "../defaultTheme";

import type { MediaQueryObject, Elevation } from "./index";

const jsxPropsMap = {
  wrap: "flex-wrap",
  shrink: "flex-shrink",
  grow: "flex-grow",
  direction: "flex-direction",
  align: "align-items",
  justify: "justify-content",
  textAlign: "text-align",
  maxWidth: "max-width",
  maxHeight: "max-height",
};

const isJsxProp = (key): boolean => Object.keys(jsxPropsMap).includes(key);

const formatCSS = (key, value): string => `${key}: ${value};`;

const firstToUpper = string => string.charAt(0).toUpperCase() + string.slice(1);

const normalizeSpacing = (el, property, theme: Theme): string[] => {
  if (typeof el === "object") {
    return Object.entries(el).map(([key, val]: any) => {
      if (val === "none") return formatCSS(`${property}-${key}`, "0");
      return formatCSS(`${property}-${key}`, TOKENS(theme)[val]);
    });
  }

  if (el !== "none") {
    return [formatCSS(property, TOKENS(theme)[el])];
  }

  return [];
};

const normalizeToken = (token, property, prefix, theme: Theme): string => {
  return formatCSS(property, theme.orbit[prefix + firstToUpper(token)]);
};

const normalizeSize = (val, property): string => {
  if (val === WIDTH_AND_HEIGHT.FULL) {
    return formatCSS(property, "100%");
  }

  return formatCSS(property, val);
};

export const normalizeFlex = (key?: "justify" | "align", val: string) => {
  if ((key === "justify" || key === "align") && val === "end") return "flex-end";
  if ((key === "justify" || key === "align") && val === "start") return "flex-start";
  if (key === "justify" && val === "between") return "space-between";
  if (key === "justify" && val === "around") return "space-around";

  return val;
};

const normalizeElevation = (val: Elevation, theme: Theme): string => {
  return formatCSS("box-shadow", theme.orbit[`boxShadow${firstToUpper(val)}`]);
};

const normalize = (object: MediaQueryObject) => ({ theme }: ThemeProps) => {
  if (!object) return null;

  return Object.entries(object).reduce((acc, [key, val]: any) => {
    if (key === "padding" || key === "margin") {
      return [...acc, ...normalizeSpacing(val, key, theme)];
    }

    if (key === "color" || key === "background") {
      return [...acc, normalizeToken(val, key, "palette", theme)];
    }

    if (key === "height" || key === "width") {
      return [...acc, normalizeSize(val, key)];
    }

    if (key === "borderRadius") {
      return [...acc, normalizeToken(val, "border-radius", "borderRadius", theme)];
    }

    if (key === "elevation") {
      return [...acc, normalizeElevation(val, theme)];
    }

    if (isJsxProp(key)) {
      return [...acc, formatCSS(jsxPropsMap[key], normalizeFlex(key, val))];
    }

    if (val) {
      return [...acc, formatCSS(key, val)];
    }

    return acc;
  }, []);
};

export default normalize;
