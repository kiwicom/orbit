// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type { Placement } from "@popperjs/core/lib/enums";
import type * as React from "react";

import type * as Common from "../common/types";

export interface Offset {
  top?: number;
  left?: number;
}

export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly content: React.ReactNode;
  readonly placement?: Placement;
  readonly opened?: boolean;
  readonly width?: string;
  readonly noPadding?: boolean;
  readonly allowOverflow?: boolean;
  readonly noFlip?: boolean;
  readonly overlapped?: boolean;
  readonly fixed?: boolean;
  readonly actions?: React.ReactNode;
  readonly offset?: Offset;
  readonly lockScrolling?: boolean;
  readonly onOpen?: Common.Callback;
  readonly renderInPortal?: boolean;
  readonly onClose?: Common.Callback;
}
