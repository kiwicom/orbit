// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as Common from "../common/types";

export type Size = "small" | "medium" | "large";
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
  | "MaestroShort"
  | "MasterCard"
  | "MasterCardShort"
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
  | "Zooz"
  | "Elo";

export interface Props extends Common.Globals {
  readonly name: Name;
  readonly size?: Size;
  readonly grayScale?: boolean;
}

