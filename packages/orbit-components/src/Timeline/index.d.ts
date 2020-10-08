// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Timeline";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly children: React.ReactNode;
}

declare const Timeline: React.FC<Props>;

export { Timeline, Timeline as default };
export { TimelineStep } from "./TimelineStep";
