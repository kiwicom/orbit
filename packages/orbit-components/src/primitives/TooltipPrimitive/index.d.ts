// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";
import type { Placement } from "@popperjs/core/lib/enums";

import * as Common from "../../common/common";

export type Size = "small" | "medium";

export interface Popper {
  readonly placement?: Placement;
  readonly noFlip?: boolean;
  readonly offset?: [number, number];
}
export interface Props extends Common.Globals, Popper {
  readonly children?: React.ReactNode;
  readonly content: React.ReactNode;
  readonly size?: Size;
  readonly error?: boolean;
  readonly help?: boolean;
  readonly stopPropagation?: boolean;
  readonly enabled?: boolean;
  readonly tabIndex?: string | number;
  readonly tooltipShown?: boolean;
  readonly removeUnderlinedText?: boolean;
  readonly block?: boolean;
  readonly renderInPortal?: boolean;
}

declare const Tooltip: React.FunctionComponent<Props>;
export { Tooltip, Tooltip as default };
