// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { Interpolation } from "styled-components";

import { Theme } from "../../defaultTheme";
import { DEVICES } from "./consts";

type QueryFunction = (style: Interpolation<any>) => Interpolation<any>;

declare const MediaQuery: Record<keyof DEVICES, QueryFunction>;

declare function getBreakpointWidth(name: keyof DEVICES, theme: Theme): string;
declare function getBreakpointWidth(name: keyof DEVICES, theme: Theme, pure: false): string;
declare function getBreakpointWidth(name: keyof DEVICES, theme: Theme, pure: true): number;

export { MediaQuery, MediaQuery as default, getBreakpointWidth };
