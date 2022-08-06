// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
}

declare const Coupon: React.FunctionComponent<Props>;
export { Coupon, Coupon as default };
