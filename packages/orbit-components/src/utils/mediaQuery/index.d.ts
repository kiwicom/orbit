// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { Interpolation, ThemeProps } from "styled-components";

import { Theme } from "../../defaultTheme";
import { DEVICES, QUERIES } from "./consts";

export type QueryFunction = (
  style: Interpolation<ThemeProps<any>>,
) => Interpolation<ThemeProps<any>>;

export type MediaQueries = Record<keyof typeof QUERIES, QueryFunction>;

declare const MediaQuery: MediaQueries;

declare function getBreakpointWidth(name: keyof typeof DEVICES, theme: Theme): string;
declare function getBreakpointWidth(name: keyof typeof DEVICES, theme: Theme, pure: false): string;
declare function getBreakpointWidth(name: keyof typeof DEVICES, theme: Theme, pure: true): number;

export { MediaQuery, MediaQuery as default, getBreakpointWidth };
