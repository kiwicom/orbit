// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";
import { Spacing } from "../Stack/index.d.ts";

declare module "@kiwicom/orbit-components/lib/LinkList";

export interface Props extends Common.Global {
  readonly direction?: "column" | "row";
  readonly indent?: boolean;
  readonly spacing?: Spacing;
  readonly children: React.ReactNode;
}

const LazyImage: React.FunctionComponent<Props>;
export { LazyImage, LazyImage as default };
