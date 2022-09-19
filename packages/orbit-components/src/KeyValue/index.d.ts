// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../common/common";
import { Spacing } from "../Stack";

export interface Props extends Common.Global {
  readonly label?: React.ReactNode;
  readonly value: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly direction?: "row" | "column";
  readonly spacing?: Spacing;
  readonly size?: "normal" | "large";
}

declare const KeyValue: React.FunctionComponent<Props>;
export { KeyValue, KeyValue as default };
