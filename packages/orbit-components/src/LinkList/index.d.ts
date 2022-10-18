// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";
import { Spacing } from "../Stack";

export interface Props extends Common.Global {
  readonly direction?: "column" | "row";
  readonly indent?: boolean;
  readonly legacy?: boolean;
  readonly spacing?: Spacing;
  readonly children: React.ReactNode;
}

declare const LinkList: React.FunctionComponent<Props>;
export { LinkList, LinkList as default };
