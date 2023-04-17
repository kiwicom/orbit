// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";
import type { Placement } from "@popperjs/core/lib/enums";

import type { Popper } from "../primitives/TooltipPrimitive/types";
import type * as Common from "../common/types";

type Size = "small" | "medium";
export interface Props extends Common.Globals, Popper {
  readonly children?: React.ReactNode;
  readonly content: React.ReactNode;
  readonly size?: Size;
  readonly renderInPortal?: boolean;
  readonly stopPropagation?: boolean;
  readonly enabled?: boolean;
  readonly onShow?: Common.Callback;
  readonly labelClose?: React.ReactNode;
  readonly placement?: Placement;
  readonly tabIndex?: string | number;
  readonly removeUnderlinedText?: boolean;
  readonly block?: boolean;
  readonly lockScrolling?: boolean;
}
