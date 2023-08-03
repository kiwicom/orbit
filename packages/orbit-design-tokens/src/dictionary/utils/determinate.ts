import _ from "lodash";

import { createObjectProperty, createDeclareExport } from "./create.js";

export const determinateUpperFirst =
  (platform: string) =>
  (name: string): string => {
    if (platform === "javascript") return name;
    return _.upperFirst(name);
  };

export const determinateObjectPropertyAlias =
  (platform: string) =>
  (name: string): string => {
    if (platform === "javascript") return name;
    return createObjectProperty(name, determinateUpperFirst(platform)(name));
  };

export const determinateExport =
  (platform: string) =>
  (name: string): string => {
    if (platform === "javascript") {
      return createDeclareExport(name, {
        isDefault: true,
        isDeclare: false,
      });
    }
    return createDeclareExport(_.upperFirst(name), {
      isDefault: true,
      isDeclare: true,
    });
  };

export const determinateAlphaHex = (alpha: number): string => {
  return Math.round(Math.min(Math.max(alpha / 100 || 1, 0), 1) * 255)
    .toString(16)
    .toUpperCase();
};
