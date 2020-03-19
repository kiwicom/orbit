// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Coupon";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
}

const Coupon: React.FunctionComponent<Props>;
export { Coupon, Coupon as default };
