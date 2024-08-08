import React from "react";

import { SIZE_OPTIONS } from "./consts";

import CarrierLogo from ".";

export default function CarrierLogoStory() {
  const single = [{ code: "FR", name: "Ryanair", type: "airline" as const }];
  const two = [
    { code: "FR", name: "Ryanair" },
    { code: "TO", name: "Transavia France" },
  ];
  const three = [
    { code: "FR", name: "Ryanair" },
    { code: "TO", name: "Transavia France" },
    { code: "VY", name: "Vueling" },
  ];
  const four = [
    { code: "FR", name: "Ryanair" },
    { code: "TO", name: "Transavia France" },
    { code: "VY", name: "Vueling" },
    { code: "OK", name: "Czech Airlines" },
  ];

  return (
    <div className="space-y-200 flex flex-col">
      <div className="space-x-600 flex">
        {Object.values(SIZE_OPTIONS).map(size => (
          <div className="space-y-200 flex flex-col">
            <CarrierLogo size={size} carriers={single} />
            <CarrierLogo rounded size={size} carriers={single} />
            <CarrierLogo inlineStacked size={size} carriers={single} />
          </div>
        ))}
      </div>

      <div className="space-y-200 flex flex-col">
        <CarrierLogo carriers={two} />
        <CarrierLogo rounded carriers={two} />
        <CarrierLogo inlineStacked carriers={two} />
        <CarrierLogo inlineStacked rounded carriers={two} />
      </div>

      <div className="space-y-200 flex flex-col">
        <CarrierLogo carriers={three} />
        <CarrierLogo rounded carriers={three} />
        <CarrierLogo inlineStacked carriers={three} />
        <CarrierLogo inlineStacked rounded carriers={three} />
      </div>

      <div className="space-y-200 flex flex-col">
        <CarrierLogo carriers={four} />
        <CarrierLogo rounded carriers={four} />
        <CarrierLogo inlineStacked carriers={four} />
        <CarrierLogo inlineStacked rounded carriers={four} />
      </div>
    </div>
  );
}
