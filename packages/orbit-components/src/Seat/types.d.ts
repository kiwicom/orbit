// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export type Size = "small" | "medium";
export type Type = "default" | "legroom" | "unavailable";

export interface SeatVariantProps {
  selected: boolean;
  type: Type;
  label?: React.ReactNode;
}

export interface Props extends Common.Globals {
  readonly type?: Type;
  readonly size?: Size;
  readonly title?: string;
  readonly description?: string;
  readonly "aria-labelledby"?: string;
  readonly onClick?: Common.Callback;
  readonly selected?: boolean;
  readonly label?: React.ReactNode;
  readonly price?: React.ReactNode;
}
