// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export type Type = "colored" | "neutral";

export interface Props extends Common.Globals, Common.Ref {
  readonly children: React.ReactNode;
  readonly type?: "colored" | "neutral";
  readonly selected?: boolean;
  readonly dateTag?: boolean;
  readonly size?: Common.InputSize;
  readonly onRemove?: Common.Callback;
  readonly onClick?: Common.Callback;
}
