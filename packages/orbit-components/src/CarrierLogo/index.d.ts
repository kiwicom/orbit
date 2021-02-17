// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

type Size = "small" | "medium" | "large";

export interface Props extends Common.Global {
  readonly size?: Size;
  readonly carriers: Common.Carrier[];
}

declare const CarrierLogo: React.FunctionComponent<Props>;
export { CarrierLogo, CarrierLogo as default };
