import * as React from "react";

import { SIZE_OPTIONS, CARRIER_TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import CarrierLogo from ".";

export default {
  title: "CarrierLogo",
};

export const OneCarrier = ({ size, dataTest, carriers }) => {
  return <CarrierLogo size={size} carriers={carriers} dataTest={dataTest} />;
};

OneCarrier.story = {
  name: "One carrier",

  parameters: {
    info: "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

OneCarrier.args = {
  size: SIZE_OPTIONS.LARGE,
  dataTest: "test",
  carriers: [{ code: "FR", name: "Ryanair" }],
};

OneCarrier.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: { type: "select" },
  },
};

export const TwoCarriers = ({ carriers }) => {
  return <CarrierLogo carriers={carriers} />;
};

TwoCarriers.story = {
  name: "Two carriers",

  parameters: {
    info: "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

TwoCarriers.args = {
  carriers: [
    { code: "FR", name: "Ryanair" },
    { code: "TO", name: "Transavia France" },
  ],
};

export const FourCarriers = ({ carriers }) => {
  return <CarrierLogo carriers={carriers} />;
};

FourCarriers.story = {
  name: "Four carriers",

  parameters: {
    info: "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

FourCarriers.args = {
  carriers: [
    { code: "FR", name: "Ryanair" },
    { code: "TO", name: "Transavia France" },
    { code: "VY", name: "Vueling" },
    { code: "OK", name: "Czech Airlines" },
  ],
};

export const InlineStacked = ({ carriers }) => {
  return <CarrierLogo carriers={carriers} inlineStacked rounded />;
};

InlineStacked.story = {
  name: "Inline stacked",

  parameters: {
    info: "Carrier logos are displayed inline, stacking on top of each other.",
  },
};

InlineStacked.args = {
  carriers: [
    { code: "FR", name: "Ryanair" },
    { code: "TO", name: "Transavia France" },
    { code: "VY", name: "Vueling" },
    { code: "OK", name: "Czech Airlines" },
  ],
};

export const NonExistingCarriers = ({ carriers }) => {
  return <CarrierLogo carriers={carriers} />;
};

NonExistingCarriers.story = {
  name: "Non-existing carriers",

  parameters: {
    info: "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

NonExistingCarriers.args = {
  carriers: [
    { code: "LOL", name: "Lorem ipsum", type: "airline" },
    { code: "KEK", name: "Lorem ipsum", type: "bus" },
    { code: "BUR", name: "Lorem ipsum", type: "train" },
  ],
};

export const NonExistingCarrier = ({ size, carriers }) => {
  return <CarrierLogo size={size} carriers={carriers} />;
};

NonExistingCarrier.story = {
  name: "Non-existing carrier",

  parameters: {
    info: "CarrierLogo can display proper placeholder for non-existing carriers by its type. If not you specify the type of carrier, airline placeholder will be displayed.",
  },
};

NonExistingCarrier.args = {
  size: SIZE_OPTIONS.LARGE,
  carriers: [{ code: "LAL", name: "Lorem ipsum", type: CARRIER_TYPE_OPTIONS.AIRLINE }],
};

NonExistingCarrier.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: { type: "select" },
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
