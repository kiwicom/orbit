// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type * as Common from "../common/types";

export type Size = "small" | "medium" | "large";
type Name =
  | "AirHelp"
  | "AirHelpNew"
  | "AirHelpPlus"
  | "Alipay"
  | "Amex"
  | "ApplePay"
  | "Axa"
  | "AxaAssistance"
  | "AxaWhite"
  | "Booking"
  | "BusinessInsider"
  | "ChinaUnionPay"
  | "DailyExpress"
  | "DinersClub"
  | "Discover"
  | "GetYourGuide"
  | "GetYourGuideLong"
  | "GooglePay"
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
  | "Sherpa"
  | "Simtex"
  | "Sofort"
  | "TravelPulse"
  | "Trustly"
  | "UsaToday"
  | "Visa"
  | "VisaHQ"
  | "Zooz"
  | "Elo"
  | "KiwiGuarantee"
  | "KiwiGuaranteeFull"
  | "KiwiGuaranteeInline";

export interface Props extends Common.Globals {
  readonly name: Name;
  readonly size?: Size;
  readonly grayScale?: boolean;
}
