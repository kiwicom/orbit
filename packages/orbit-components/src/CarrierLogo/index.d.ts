// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

type Size = "small" | "medium" | "large";

export interface Carrier {
  code: string;
  name: string;
  type?: "airline" | "bus" | "train" | "ferry" | "private_transfer" | "kiwicom";
}

export interface Props extends Common.Globals {
  readonly size?: Size;
  readonly rounded?: boolean;
  readonly carriers: Common.Carrier[];
}

declare const CarrierLogo: React.FunctionComponent<Props>;
export { CarrierLogo, CarrierLogo as default };
