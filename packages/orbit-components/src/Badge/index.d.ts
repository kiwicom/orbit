// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Badge";

export type Type =
  | "neutral"
  | "dark"
  | "info"
  | "success"
  | "warning"
  | "critical"
  | "white"
  | "infoInverted"
  | "criticalInverted"
  | "successInverted"
  | "warningInverted";

export interface Props extends Common.Global {
  readonly children?: React.ReactNode;
  readonly type?: Type;
  readonly icon?: React.ReactNode;
  readonly ariaLabel?: string;
}

declare const Badge: React.FunctionComponent<Props>;
export { Badge, Badge as default };
