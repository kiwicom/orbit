// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";
import type { Placement } from "../common/placements";

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
  readonly maxHeight?: string;
  readonly noPadding?: boolean;
  readonly renderTimeout?: number;
  readonly allowOverflow?: boolean;
  readonly noFlip?: boolean;
  readonly overlapped?: boolean;
  readonly fixed?: boolean;
  readonly actions?: React.ReactNode;
  readonly labelClose?: React.ReactNode;
  readonly offset?: Offset;
  readonly lockScrolling?: boolean;
  readonly onOpen?: Common.Callback;
  readonly renderInPortal?: boolean;
  readonly onClose?: Common.Callback;
  readonly zIndex?: number;
  readonly ariaLabel?: string;
  readonly ariaLabelledby?: string;
  readonly role?: "dialog" | "menu" | "grid" | "listbox" | "tree";
  readonly tabIndex?: string | number;
  readonly triggerRole?: string;
}
