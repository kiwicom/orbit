// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../../common/types";
import type { Placement } from "../../common/placements";

export type Size = "small" | "medium";

export interface Props extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly content: React.ReactNode;
  readonly size?: Size;
  readonly onShow?: Common.Callback;
  readonly error?: boolean;
  readonly help?: boolean;
  readonly stopPropagation?: boolean;
  readonly enabled?: boolean;
  readonly tabIndex?: string | number;
  readonly tooltipShown?: boolean;
  readonly removeUnderlinedText?: boolean;
  readonly block?: boolean;
  readonly renderInPortal?: boolean;
  readonly placement?: Placement;
  readonly noFlip?: boolean;
  readonly offset?: [number, number];
}
