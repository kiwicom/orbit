import type { Theme } from "../../defaultTheme";

export type Devices =
  | "largeDesktop"
  | "desktop"
  | "tablet"
  | "largeMobile"
  | "mediumMobile"
  | "smallMobile";

export enum QUERIES {
  MEDIUMMOBILE = "mediumMobile",
  LARGEMOBILE = "largeMobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
  LARGEDESKTOP = "largeDesktop",
}

export const TOKEN = {
  mediumMobile: "widthBreakpointMediumMobile",
  largeMobile: "widthBreakpointLargeMobile",
  tablet: "widthBreakpointTablet",
  desktop: "widthBreakpointDesktop",
  largeDesktop: "widthBreakpointLargeDesktop",
} as const;

export interface GetBreakpointWidth {
  (name: keyof typeof TOKEN, theme: Theme): string;
  (name: keyof typeof TOKEN, theme: Theme, pure: false): string;
  (name: keyof typeof TOKEN, theme: Theme, pure: true): number;
}

export const getBreakpointWidth: GetBreakpointWidth = (
  name: string,
  theme: Theme,
  pure?: boolean,
) => {
  return pure ? theme.orbit[TOKEN[name]] : `(min-width: ${theme.orbit[TOKEN[name]]}px)`;
};
