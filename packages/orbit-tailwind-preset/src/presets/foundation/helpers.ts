import type { defaultFoundation } from "@kiwicom/orbit-design-tokens";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

export interface Options {
  /** default: `true` eg does not include the tailwind preflight */
  disablePreflight?: boolean;
  /** default: [] */
  content: [];
}

export const kebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

export const firstToUpper = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export type ExportedComponentLevelTokens =
  | "alert"
  | "button"
  | "buttonLink"
  | "badge"
  | "icon"
  | "tag"
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

type KebabCase<S extends string> = S extends `${infer T}${infer U}`
  ? U extends Uncapitalize<U>
    ? `${Uncapitalize<T>}${KebabCase<U>}`
    : `${Uncapitalize<T>}-${KebabCase<U>}`
  : S;

type TransformedTokens = Record<
  KebabCase<keyof typeof defaultFoundation>,
  Record<KebabCase<string>, string>
>;

export const transformToKebabCase = (tokens: typeof defaultFoundation) => {
  if (typeof tokens !== "object") return tokens;

  return Object.keys(tokens).reduce((acc, key) => {
    const kebabKey = kebabCase(key);
    const value = tokens[key];

    if (typeof value === "object") {
      acc[kebabKey] = transformToKebabCase(value);
    } else {
      acc[kebabKey] = value;
    }

    return acc;
  }, {} as TransformedTokens);
};

export const getComponentLevelToken = (
  component: ExportedComponentLevelTokens,
  type: ExportedComponentLevelTypes,
) => {
  return Object.keys(defaultTokens).reduce((acc, key) => {
    const k = key.toLowerCase();
    const c = component.toLowerCase();
    const t = type.toLowerCase();

    if (k.startsWith(c) && k.endsWith(t)) {
      if (defaultTokens[key]) {
        acc[kebabCase(key)] = defaultTokens[key];
      }
    }

    return acc;
  }, {});
};
