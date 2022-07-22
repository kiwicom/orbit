// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../common/types";
import { Spacing } from "../Stack/types";

export interface Props extends Common.Globals {
  readonly label?: React.ReactNode;
  readonly value: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly direction?: "row" | "column";
  readonly spacing?: Spacing;
  readonly size?: "normal" | "large";
}
