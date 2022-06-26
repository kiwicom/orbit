import { defaultTheme } from "@kiwicom/orbit-components";

export const HEADER_HEIGHT = "56px";
export const ROW_HEIGHT = "72px";

export type Status =
  | "Released"
  | "Designing"
  | "Developing"
  | "Planned"
  | "Postponed"
  | "Waiting"
  | "N/A"
  | "Deprecated";

export const GROUPS = [
  "Accessibility",
  "Action",
  "Information",
  "Input",
  "Interaction",
  "Layout",
  "Navigation",
  "Overlay",
  "Primitives",
  "Progress indicators",
  "Responsive",
  "Structure",
  "Text",
  "Utility",
  "Visuals",
] as const;
export type Group = typeof GROUPS[number];

export interface ComponentStatus {
  component: string;
  figma: Status;
  react: Status;
  ios: Status;
  android: Status;
  docs: Status;
  group: Group;
}

export const PLATFORMS = ["figma", "react", "ios", "android", "docs"] as const;
export type Platform = typeof PLATFORMS[number];

export const STATUS_COLOR: Record<Status, keyof typeof defaultTheme["orbit"]> = {
  Released: "paletteGreenNormal",
  Designing: "paletteOrangeNormal",
  Developing: "paletteOrangeNormal",
  Planned: "paletteBlueNormal",
  Postponed: "paletteBlueNormal",
  Waiting: "paletteBlueNormal",
  "N/A": "paletteRedNormal",
  Deprecated: "paletteRedNormal",
};
