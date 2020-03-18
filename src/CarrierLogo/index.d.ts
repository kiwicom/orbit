// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/CarrierLogo";

export { CarrierLogo, CarrierLogo as default };

declare namespace CarrierLogo {
  type Size = "small" | "medium" | "large";

  interface Props extends Common.Global {
    readonly size?: Size;
    readonly carriers: Common.Carrier[];
  }
}

declare class CarrierLogo extends React.Component<CarrierLogo.Props> {}
