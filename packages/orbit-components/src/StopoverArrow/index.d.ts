// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/StopoverArrow";

type Stops = "0" | "1" | "2" | "3";

interface Props extends Common.Global {
  readonly stops: Stops;
}

declare const StopoverArrow: React.FunctionComponent<Props>;
export { StopoverArrow, StopoverArrow as default };
