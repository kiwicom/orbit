import type { Placement as FloatingPlacement, Alignment } from "@floating-ui/react";

export type AutoPlacement = "auto" | "auto-start" | "auto-end";
export type FixedPlacement = FloatingPlacement;
export type Placement = AutoPlacement | FixedPlacement;

export enum AUTO_PLACEMENTS {
  AUTO = "auto",
  AUTO_START = "auto-start",
  AUTO_END = "auto-end",
}

export enum PLACEMENTS {
  TOP = "top",
  TOP_START = "top-start",
  TOP_END = "top-end",
  BOTTOM = "bottom",
  BOTTOM_START = "bottom-start",
  BOTTOM_END = "bottom-end",
  RIGHT = "right",
  RIGHT_START = "right-start",
  RIGHT_END = "right-end",
  LEFT = "left",
  LEFT_START = "left-start",
  LEFT_END = "left-end",
}
export const isFixedPlacement = (placement: string): placement is FixedPlacement =>
  Object.values(PLACEMENTS).includes(placement as PLACEMENTS);

export const getAutoAlignment = (placement: AutoPlacement): Alignment | undefined => {
  switch (placement) {
    case "auto-start":
      return "start";
    case "auto-end":
      return "end";
    case "auto":
    default:
      return undefined;
  }
};
