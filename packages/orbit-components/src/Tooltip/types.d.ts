// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";
import type { Placement } from "../common/placements";

type Size = "small" | "medium";
export interface Props extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly content: React.ReactNode;
  readonly size?: Size;
  readonly renderInPortal?: boolean;
  readonly stopPropagation?: boolean;
  readonly enabled?: boolean;
  readonly onShow?: Common.Callback;
  readonly labelClose?: string;
  readonly tabIndex?: string | number;
  readonly removeUnderlinedText?: boolean;
  readonly block?: boolean;
  readonly lockScrolling?: boolean;
  readonly placement?: Placement;
  readonly noFlip?: boolean;
  readonly offset?: [number, number];
}
