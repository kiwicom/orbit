// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";
import { Spacing } from "../Stack/types";

export interface Props extends Common.Globals {
  readonly direction?: "column" | "row";
  readonly indent?: boolean;
  readonly spacing?: Spacing;
  readonly children: React.ReactNode;
}
