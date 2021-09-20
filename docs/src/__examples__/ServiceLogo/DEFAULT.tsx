import React from "react";
import { ServiceLogo } from "@kiwicom/orbit-components";

export const NAME_OPTIONS = {
  AIRHELP: "AirHelp",
  ALIPAY: "Alipay",
  AMEX: "Amex",
  AXA: "Axa",
  AXAASSISTANCE: "AxaAssistance",
  BOOKING: "Booking",
  BUSINESSINSIDER: "BusinessInsider",
  CHINAUNIONPAY: "ChinaUnionPay",
  DAILYEXPRESS: "DailyExpress",
  DINERSCLUB: "DinersClub",
  DISCOVER: "Discover",
  IATA: "IATA",
  JCB: "JCB",
  MAILONLINE: "MailOnline",
  MAESTRO: "Maestro",
  MAESTROSHORT: "MaestroShort",
  MASTERCARD: "MasterCard",
  MASTERCARDSHORT: "MasterCardShort",
  MIR: "MIR",
  MIRROR: "Mirror",
  NEWYORKTIMES: "NewYorkTimes",
  NORTOSECURED: "NortonSecured",
  PAYPAL: "PayPal",
  RENTALCARS: "RentalCars",
  SOFORT: "Sofort",
  TRAVELPULSE: "TravelPulse",
  TRUSTLY: "Trustly",
  USATODAY: "UsaToday",
  VISA: "Visa",
  VISAHQ: "VisaHQ",
  ZOOZ: "Zooz",
  ELO: "Elo",
};

export default {
  Example: () => <ServiceLogo name="NewYorkTimes" />,
  exampleKnobs: [
    {
      component: "ServiceLogo",
      knobs: [
        {
          name: "name",
          type: "select",
          options: Object.values(NAME_OPTIONS),
          defaultValue: "",
        },
        {
          name: "size",
          type: "select",
          options: ["small", "medium", "large"],
          defaultValue: "medium",
        },
        {
          name: "grayScale",
          type: "boolean",
          defaultValue: false,
        },
      ],
    },
  ],
};
