// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { Interpolation } from "styled-components";

import { Theme } from "../../defaultTheme";
import { DEVICES, QUERIES } from "./consts";

export type Devices =
  | "largeDesktop"
  | "desktop"
  | "tablet"
  | "largeMobile"
  | "mediumMobile"
  | "smallMobile";

type BreakpointToken =
  | "widthBreakpointMediumMobile"
  | "widthBreakpointLargeMobile"
  | "widthBreakpointTablet"
  | "widthBreakpointDesktop"
  | "widthBreakpointLargeDesktop";

export type QueryFunction = (style: Interpolation<any>) => Interpolation<any>;

export type MediaQueries = Record<keyof typeof QUERIES, QueryFunction>;

declare const MediaQuery: MediaQueries;

declare function getBreakpointWidth(name: keyof typeof DEVICES, theme: Theme): string;
declare function getBreakpointWidth(name: keyof typeof DEVICES, theme: Theme, pure: false): string;
declare function getBreakpointWidth(name: keyof typeof DEVICES, theme: Theme, pure: true): number;

export { MediaQuery, MediaQuery as default, getBreakpointWidth };
