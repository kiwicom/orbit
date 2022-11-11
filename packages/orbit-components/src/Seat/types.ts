// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

export type Size = "small" | "medium";
export type Type = "default" | "legroom" | "unavailable";

export interface Props extends Common.Globals {
  readonly type?: Type;
  readonly size?: Size;
  readonly title?: string;
  readonly description?: string;
  readonly onClick?: Common.Callback;
  readonly selected?: boolean;
  readonly label?: React.ReactNode;
  readonly price?: React.ReactNode;
}
