// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/ServiceLogo";

export { ServiceLogo, ServiceLogo as default };

declare namespace ServiceLogo {
  type Size = "small" | "medium" | "large";
  type Name =
    | "AirHelp"
    | "Alipay"
    | "Amex"
    | "AxaAssistance"
    | "ChinaUnionPay"
    | "DinersClub"
    | "Discover"
    | "JCB"
    | "Maestro"
    | "MasterCard"
    | "MIR"
    | "NewYorkTimes"
    | "NortonSecured"
    | "PayPal"
    | "Sofort"
    | "TravelPulse"
    | "Trustly"
    | "UsaToday"
    | "Visa"
    | "VisaHQ"
    | "Zooz";

  interface Props extends Common.Global {
    readonly name: Name;
    readonly size?: Size;
    readonly grayScale?: boolean;
  }
}

declare class ServiceLogo extends React.Component<ServiceLogo.Props> {}
