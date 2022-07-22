// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { Interpolation } from "styled-components";

import { Theme } from "../../defaultTheme";
import { Devices } from "./consts";

type QueryFunction = (style: Interpolation<any>) => Interpolation<any>;

declare const MediaQuery: Record<Devices, QueryFunction>;
declare function getBreakpointWidth(name: Devices, theme: Theme): string;
declare function getBreakpointWidth(name: Devices, theme: Theme, pure: false): string;
declare function getBreakpointWidth(name: Devices, theme: Theme, pure: true): number;

export { MediaQuery, MediaQuery as default, getBreakpointWidth };
