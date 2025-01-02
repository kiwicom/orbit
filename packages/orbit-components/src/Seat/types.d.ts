// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export type Size = "small" | "medium";
export type Type = "default" | "legroom" | "unavailable";
export type SeatStatus = "default" | "selected" | "processing" | "done";

export interface SeatVariantProps {
  selected?: boolean;
  status?: SeatStatus;
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
  /**
   * @deprecated Use `status="selected"` instead.
   */
  readonly selected?: boolean;
  readonly status?: SeatStatus;
  readonly label?: string;
  readonly price?: string;
}
