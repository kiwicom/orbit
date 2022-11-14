import { WIDTH_AND_HEIGHT } from "./consts";
import { TOKENS } from "../utils/layout/consts";
import type { ThemeProps, Theme } from "../defaultTheme";
import { firstToUpper } from "../utils/common";
import { getJustify, getAlign, formatCSS, getDirection, getWrap, isDefined } from "../utils/layout";
import type { MediaQueryObject, Elevation } from "./types";

const normalizeSpacing = (el, property, theme: Theme): string[] => {
  if (typeof el === "object") {
    return Object.keys(el).map(key => {
      const val = el[key];
      if (val === "none") return formatCSS(`${property}-${key}`, "0");
      return formatCSS(`${property}-${key}`, TOKENS(theme)[val]);
    });
  }

  if (el !== "none") {
    return [formatCSS(property, TOKENS(theme)[el])];
  }

  return [];
};

const normalizeToken = (token, property, prefix, theme: Theme): string =>
  formatCSS(property, theme.orbit[prefix + firstToUpper(token)]);

const normalizeSize = (val, property): string => {
  if (val === WIDTH_AND_HEIGHT.FULL) {
    return formatCSS(property, "100%");
  }

  return formatCSS(property, val);
};

const normalizeElevation = (val: Elevation, theme: Theme): string => {
  return formatCSS("box-shadow", theme.orbit[`boxShadow${firstToUpper(val)}`]);
};

const norm = ({ val, key, theme }): string | void => {
  if (!isDefined(val) || !isDefined(key)) return undefined;

  const all = {
    padding: normalizeSpacing(val, key, theme),
    margin: normalizeSpacing(val, key, theme),
    color: key === "color" && normalizeToken(val, key, "palette", theme),
    background: key === "background" && normalizeToken(val, key, "palette", theme),
    height: normalizeSize(val, key),
    width: normalizeSize(val, key),
    borderRadius:
      key === "borderRadius" && normalizeToken(val, "border-radius", "borderRadius", theme),
    elevation: key === "elevation" && normalizeElevation(val, theme),
    justify: formatCSS("justify-content", getJustify(val)),
    align: formatCSS("align-items", getAlign(val)),
    direction: formatCSS("flex-direction", getDirection(val)),
    grow: formatCSS("flex-grow", val),
    shrink: formatCSS("flex-shrink", val),
    wrap: formatCSS("flex-wrap", getWrap(val)),
    textAlign: formatCSS("text-align", val),
    minWidth: formatCSS("min-width", val),
    maxWidth: formatCSS("max-width", val),
    maxHeight: formatCSS("max-height", val),
    zIndex: formatCSS("z-index", val),
  };

  if (!all[key]) return formatCSS(key, val);

  return all[key];
};

const normalize = (mqObject: MediaQueryObject) => ({ theme }: ThemeProps) => {
  if (!mqObject) return null;

  return Object.keys(mqObject).reduce<string[]>((acc, prop) => {
    const val = mqObject[prop];
    const accFn = additional => [...acc, ...additional];
    return accFn([norm({ val, key: prop, theme })]);
  }, []);
};

export default normalize;
