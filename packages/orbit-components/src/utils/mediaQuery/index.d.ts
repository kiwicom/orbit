// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import { Interpolation } from "styled-components";

import { ThemeShape } from "../../defaultTheme";
import { Devices } from "./consts";

declare module "@kiwicom/orbit-components/lib/utils/mediaQuery";

type QueryFunction = (style: Interpolation<any>) => Interpolation<any>;

declare const MediaQuery: { [key in Devices]: QueryFunction };
declare const getBreakpointWidth: (name: string, theme: ThemeShape, pure?: boolean) => string;

export { MediaQuery, MediaQuery as default, getBreakpointWidth };
