// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export interface Props extends Common.Globals {
  readonly title: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly renderInPortal?: boolean;
  readonly maxWidth?: number;
  readonly illustration?: React.ReactNode;
  readonly primaryAction: React.ReactNode;
  readonly secondaryAction?: React.ReactNode;
  readonly lockScrolling?: boolean;
  readonly onClose?: Common.Callback;
}
