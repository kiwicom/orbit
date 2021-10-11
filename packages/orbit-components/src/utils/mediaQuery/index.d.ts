// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { Interpolation } from "styled-components";

import { ThemeShape } from "../../defaultTheme";
import { Devices } from "./consts";

type QueryFunction = (style: Interpolation<any>) => Interpolation<any>;

declare const MediaQuery: Record<Devices, QueryFunction>;
declare const getBreakpointWidth: (
  name: Devices,
  theme: ThemeShape,
  pure?: boolean,
) => number | string;

export { MediaQuery, MediaQuery as default, getBreakpointWidth };
