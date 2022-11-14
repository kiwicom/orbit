import type { Type } from "./types";

export const TYPE_OPTIONS: Record<"INFO" | "SUCCESS" | "WARNING" | "CRITICAL", Type> = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  CRITICAL: "critical",
};

export const TOKENS = {
  backgroundAlert: "backgroundAlert",
  colorIconAlert: "colorIconAlert",
  colorTextLinkAlertHover: "colorTextLinkAlertHover",
  colorTextLinkAlertFocus: "colorTextLinkAlertFocus",
  colorBorderAlert: "colorBorderAlert",
  colorAccentBorder: "colorAccentBorder",
};

export const CLOSE_BUTTON_DATA_TEST = "AlertCloseButton";
