// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type * as React from "react";

import type * as Common from "../../common/types";

export type Type = "neutral" | "info" | "success" | "warning" | "critical";
export type Size = "small" | "normal";

export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly type?: Type;
  readonly size?: Size;
  readonly strikeThrough?: boolean;
  readonly icon: React.ReactNode;
}
