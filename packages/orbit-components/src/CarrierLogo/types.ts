// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

export type Size = "small" | "medium" | "large";
export type CarrierType = "airline" | "bus" | "train" | "ferry" | "private_transfer" | "kiwicom";

export interface Carrier {
  code: string;
  name: string;
  type?: CarrierType;
}

export interface Props extends Common.Globals {
  readonly size?: Size;
  readonly rounded?: boolean;
  readonly carriers: Common.Carrier[];
}
