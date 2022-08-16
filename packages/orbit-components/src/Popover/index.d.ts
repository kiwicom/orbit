// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import { Placement } from "@popperjs/core/lib/enums";
import * as React from "react";

import * as Common from "../common/common";

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

declare const Popover: React.FunctionComponent<Props>;

export { Popover, Popover as default };
