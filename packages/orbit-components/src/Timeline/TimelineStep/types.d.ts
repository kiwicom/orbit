// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../../common/types";

export type Type = "success" | "warning" | "critical" | "info";
export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly label: React.ReactNode;
  readonly subLabel?: React.ReactNode;
  readonly active?: boolean;
  readonly type?: Type;
}
