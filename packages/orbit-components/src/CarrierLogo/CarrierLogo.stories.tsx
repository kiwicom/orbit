import * as React from "react";
import { object, select, text } from "@storybook/addon-knobs";

import { SIZE_OPTIONS, CARRIER_TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import type { Carrier } from "./types";

import CarrierLogo from ".";

const carriersLabel = "Carriers";

export default {
  title: "CarrierLogo",
};

export const OneCarrier = () => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.LARGE);
  const dataTest = text("dataTest", "test");

  const carrier = [{ code: "FR", name: "Ryanair" }];

  const carriersObject = object(carriersLabel, carrier);

  return <CarrierLogo size={size} carriers={carriersObject} dataTest={dataTest} />;
};

OneCarrier.story = {
  name: "One carrier",

  parameters: {
    info: "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const TwoCarriers = () => {
  const carrier: Carrier[] = [
    { code: "FR", name: "Ryanair" },
    { code: "TO", name: "Transavia France" },
  ];

  const carriersObject = object(carriersLabel, carrier);

  return <CarrierLogo carriers={carriersObject} />;
};

TwoCarriers.story = {
  name: "Two carriers",

  parameters: {
    info: "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const FourCarriers = () => {
  const carrier = [
    { code: "FR", name: "Ryanair" },
    { code: "TO", name: "Transavia France" },
    { code: "VY", name: "Vueling" },
    { code: "OK", name: "Czech Airlines" },
  ];

  const carriersObject = object(carriersLabel, carrier);

  return <CarrierLogo carriers={carriersObject} />;
};

FourCarriers.story = {
  name: "Four carriers",

  parameters: {
    info: "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const InlineStacked = () => {
  const carrier = [
    { code: "FR", name: "Ryanair" },
    { code: "TO", name: "Transavia France" },
    { code: "VY", name: "Vueling" },
    { code: "OK", name: "Czech Airlines" },
  ];

  const carriersObject = object(carriersLabel, carrier);

  return <CarrierLogo carriers={carriersObject} inlineStacked rounded />;
};

InlineStacked.story = {
  name: "Inline stacked",

  parameters: {
    info: "Carrier logos are displayed inline, stacking on top of each other.",
  },
};

export const NonExistingCarriers = () => {
  const carrier: Carrier[] = [
    { code: "LOL", name: "Lorem ipsum", type: "airline" },
    { code: "KEK", name: "Lorem ipsum", type: "bus" },
    { code: "BUR", name: "Lorem ipsum", type: "train" },
  ];

  const carriersObject = object(carriersLabel, carrier);

  return <CarrierLogo carriers={carriersObject} />;
};

NonExistingCarriers.story = {
  name: "Non-existing carriers",

  parameters: {
    info: "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const NonExistingCarrier = () => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.LARGE);
  const carrierType = select(
    "Type",
    Object.values(CARRIER_TYPE_OPTIONS),
    CARRIER_TYPE_OPTIONS.AIRLINE,
  );
  const carrier = [{ code: "LAL", name: "Lorem ipsum", type: carrierType }];
  const carriersObject = object(carriersLabel, carrier);

  return <CarrierLogo size={size} carriers={carriersObject} />;
};

NonExistingCarrier.story = {
  name: "Non-existing carrier",

  parameters: {
    info: "CarrierLogo can display proper placeholder for non-existing carriers by its type. If not you specify the type of carrier, airline placeholder will be displayed.",
  },
};

export const Rtl = () => (
  <RenderInRtl>
    <CarrierLogo
      rounded
      inlineStacked
      size="large"
      carriers={[
        { code: "FR", name: "Lorem ipsum", type: "airline" },
        { code: "TO", name: "Lorem ipsum", type: "train" },
      ]}
    />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

export const VisualTest = () => {
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
  const types1 = [
    { code: "KEK1", name: "Mount", type: "airline" as const },
    { code: "KEK2", name: "Mount", type: "bus" as const },
    { code: "KEK3", name: "Mount", type: "train" as const },
    { code: "KEK4", name: "Mount", type: "ferry" as const },
  ];
  const types2 = [
    { code: "KEK1", name: "Mount", type: "private_transfer" as const },
    { code: "KEK2", name: "Mount", type: "kiwicom" as const },
    { code: "KEK3", name: "Mount" },
  ];

  return (
    <div className="space-y-xs">
      <div className="space-x-lg flex">
        {Object.values(SIZE_OPTIONS).map(size => (
          <div className="space-x-xs flex">
            <CarrierLogo size={size} carriers={single} />
            <CarrierLogo rounded size={size} carriers={single} />
            <CarrierLogo inlineStacked size={size} carriers={single} />
          </div>
        ))}
      </div>

      <div className="space-x-xs flex">
        <CarrierLogo carriers={two} />
        <CarrierLogo rounded carriers={two} />
        <CarrierLogo inlineStacked carriers={two} />
      </div>

      <div className="space-x-xs flex">
        <CarrierLogo carriers={three} />
        <CarrierLogo rounded carriers={three} />
        <CarrierLogo inlineStacked carriers={three} />
      </div>

      <div className="space-x-xs flex">
        <CarrierLogo carriers={four} />
        <CarrierLogo rounded carriers={four} />
        <CarrierLogo inlineStacked carriers={four} />
      </div>

      <div className="space-x-xs flex">
        <CarrierLogo carriers={types1} />
        <CarrierLogo carriers={types2} />
      </div>
    </div>
  );
};

VisualTest.story = {
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
