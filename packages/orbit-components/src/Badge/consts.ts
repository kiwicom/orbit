import { Type } from "./index.d";

export const TYPE_OPTIONS: Record<string, Type> = {
  NEUTRAL: "neutral",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  CRITICAL: "critical",
  DARK: "dark",
  WHITE: "white",
  INFO_INVERTED: "infoInverted",
  CRITICAL_INVERTED: "criticalInverted",
  SUCCESS_INVERTED: "successInverted",
  WARNING_INVERTED: "warningInverted",
  BUNDLE_BASIC: "bundleBasic",
  BUNDLE_MEDIUM: "bundleMedium",
  BUNDLE_TOP: "bundleTop",
};

export const TOKENS = {
  background: "background",
  color: "color",
  border: "border",
};
