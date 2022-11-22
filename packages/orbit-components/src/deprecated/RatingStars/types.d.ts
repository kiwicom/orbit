// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import type * as Common from "../../common/types";

type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary";

export interface Props extends Common.Globals {
  readonly rating: number;
  readonly size?: Size;
  readonly color?: Color;
  readonly showEmpty?: boolean;
}
