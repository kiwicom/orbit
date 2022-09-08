// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { Interpolation } from "styled-components";

import { QUERIES } from "./consts";

export type Devices =
  | "largeDesktop"
  | "desktop"
  | "tablet"
  | "largeMobile"
  | "mediumMobile"
  | "smallMobile";

export type BreakpointToken =
  | "widthBreakpointMediumMobile"
  | "widthBreakpointLargeMobile"
  | "widthBreakpointTablet"
  | "widthBreakpointDesktop"
  | "widthBreakpointLargeDesktop";

export type QueryFunction = (style: Interpolation<any>) => Interpolation<any>;

export type MediaQueries = Record<keyof typeof QUERIES, QueryFunction>;
