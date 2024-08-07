// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";
import type { Spacing } from "../Stack/types";

export interface Props extends Common.Globals {
  readonly direction?: "column" | "row" | "row-reverse" | "column-reverse";
  readonly indent?: boolean;
  readonly legacy?: boolean;
  readonly spacing?: Spacing;
  readonly children: React.ReactNode;
}
