// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

type Position = "left" | "right";

export interface Props extends Common.Globals {
  readonly actions?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly lockScrolling?: boolean;
  readonly noPadding?: boolean;
  readonly onClose?: Common.Callback;
  readonly fixedHeader?: boolean;
  readonly position?: Position;
  readonly shown: boolean;
  readonly suppressed?: boolean;
  readonly title?: Common.Translation;
  readonly width?: string;
}
