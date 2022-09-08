// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/types";

export type Type = "success" | "warning" | "critical";
export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly label: string;
  readonly asText?: boolean;
  readonly subLabel?: string;
  readonly type?: Type;
}
