import { mediaQueries } from "@kiwicom/orbit-components";

export const TAB_HEIGHT = "64px";
export const BORDER_RADIUS = "12px";
// taken from the stronger shadow that appears when hovering stacked tabs
// we use these values for padding to prevent that shadow from clipping
export const SHADOW_TOP = "16px";
export const SHADOW_LEFT = "24px";
export const SHADOW_RIGHT = "24px";
export const FULL_WIDTH_BREAKPOINT: keyof typeof mediaQueries = "largeMobile";
