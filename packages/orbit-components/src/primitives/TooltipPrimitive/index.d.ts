// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";
import type { Placement } from "@popperjs/core/lib/enums";

import * as Common from "../../common/common";

type Size = "small" | "medium";

export interface Popper {
  readonly placement?: Placement;
  readonly noFlip?: boolean;
  readonly offset?: [number, number];
}
interface Props extends Common.Global, Popper {
  readonly children?: React.ReactNode;
  readonly content: React.ReactNode;
  readonly size?: Size;
  readonly onShown?: Common.Callback;
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
