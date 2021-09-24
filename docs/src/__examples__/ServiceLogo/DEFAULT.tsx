import React from "react";
import { ServiceLogo } from "@kiwicom/orbit-components";

export default {
  Example: () => <ServiceLogo name="NewYorkTimes" />,
  exampleKnobs: [
    {
      component: "ServiceLogo",
      knobs: [
        {
          name: "name",
          type: "select",
          options: [
            "AirHelp",
            "Alipay",
            "Amex",
            "Axa",
            "AxaAssistance",
            "Booking",
            "BusinessInsider",
            "ChinaUnionPay",
            "DinersClub",
            "Discover",
            "IATA",
            "JCB",
            "MailOnline",
            "Maestro",
            "MaestroShort",
            "MasterCard",
            "MasterCardShort",
            "MIR",
            "Mirror",
            "NewYorkTimes",
            "NortonSecured",
            "PayPal",
            "RentalCars",
            "Sofort",
            "TravelPulse",
            "Trustly",
            "UsaToday",
            "Visa",
            "VisaHQ",
            "Zooz",
            "Elo",
          ],
          defaultValue: "NewYorkTimes",
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
