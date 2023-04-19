import type { Type } from "./types";

export const TYPE_OPTIONS: Record<string, Type> = {
  NEUTRAL: "neutral",
  INFO_SUBTLE: "infoSubtle",
  SUCCESS_SUBTLE: "successSubtle",
  WARNING_SUBTLE: "warningSubtle",
  CRITICAL_SUBTLE: "criticalSubtle",
  DARK: "dark",
  WHITE: "white",
  INFO: "info",
  CRITICAL: "critical",
  SUCCESS: "success",
  WARNING: "warning",
  BUNDLE_BASIC: "bundleBasic",
  BUNDLE_MEDIUM: "bundleMedium",
  BUNDLE_TOP: "bundleTop",
};

export const TOKENS = {
  background: "background",
  color: "color",
  border: "border",
};
