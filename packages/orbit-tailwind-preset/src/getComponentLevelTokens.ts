import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import kebabCase from "./utils/kebabCase";

export type ExportedComponentLevelTokens =
  | "alert"
  | "button"
  | "buttonLink"
  | "badge"
  | "icon"
  | "drawer"
  | "tag"
  | "tab"
  | "loading"
  | "textLink"
  | "text"
  | "heading"
  | "formBox"
  | "illustration"
  | "formElement"
  | "table"
  | "switch"
  | "tooltip"
  | "carrierLogo"
  | "countryFlag"
  | "socialButton"
  | "card";

type ExportedComponentLevelTypes =
  | "background"
  | "backgroundHover"
  | "backgroundActive"
  | "foreground"
  | "foregroundInverted"
  | "foregroundHover"
  | "foregroundActive"
  | "borderColor"
  | "fontSize"
  | "padding"
  | "margin"
  | "fontWeight"
  | "lineHeight";

const getComponentLevelTokens =
  (tokens: typeof defaultTokens = defaultTokens) =>
  (component: ExportedComponentLevelTokens, type: ExportedComponentLevelTypes) => {
    return Object.keys(tokens).reduce((acc, key) => {
      const k = key.toLowerCase();
      const c = component.toLowerCase();
      const t = type.toLowerCase();

      if (k.startsWith(c) && k.endsWith(t)) {
        // Button bundles are linear gradients
        if (
          key.includes("buttonBundle") ||
          (key.includes("badgeBundle") && !type.includes("foreground"))
        )
          return acc;

        if (tokens[key]) {
          acc[kebabCase(key)] = tokens[key];
        }
      }

      return acc;
    }, {});
  };

export default getComponentLevelTokens;
