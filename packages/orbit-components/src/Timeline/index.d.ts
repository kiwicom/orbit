// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly direction?: "row" | "column";
}

declare const Timeline: React.FC<Props>;

export { Timeline, Timeline as default };
export { TimelineStep } from "./TimelineStep";
