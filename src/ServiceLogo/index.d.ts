// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/ServiceLogo";

type Size = "small" | "medium" | "large";
type Name =
  | "AirHelp"
  | "Alipay"
  | "Amex"
  | "Axa"
  | "AxaAssistance"
  | "Booking"
  | "BusinessInsider"
  | "ChinaUnionPay"
  | "DailyExpress"
  | "DinersClub"
  | "Discover"
  | "IATA"
  | "JCB"
  | "MailOnline"
  | "Maestro"
  | "MasterCard"
  | "MIR"
  | "Mirror"
  | "NewYorkTimes"
  | "NortonSecured"
  | "PayPal"
  | "RentalCars"
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

const ServiceLogo: React.FunctionComponent<Props>;
export { ServiceLogo, ServiceLogo as default };
