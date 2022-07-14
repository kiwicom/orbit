// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

export type Type = "success" | "warning" | "critical";
export interface Props extends Common.Global, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly label: string;
  readonly asText?: boolean;
  readonly subLabel?: string;
  readonly type?: Type;
}

declare const TimelineStep: React.FC<Props>;

export { TimelineStep, TimelineStep as default };
