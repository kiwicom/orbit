// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export type Type = "Search" | "Booking" | "MMB";

export interface Props extends Common.Globals {
  readonly type: Type;
  readonly children: React.ReactNode;
}
