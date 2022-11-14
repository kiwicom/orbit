import type { Size } from "./types";

type SizeKeys = "EXTRASMALL" | "SMALL" | "MEDIUM" | "LARGE" | "DISPLAY";

export const SIZE_OPTIONS: Record<SizeKeys, Size> = {
  EXTRASMALL: "extraSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  DISPLAY: "display",
};

export const baseURL = "//images.kiwi.com";
