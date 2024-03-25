import React from "react";
import { select, text } from "@storybook/addon-knobs";

import { NAMES } from "./consts.mts";
import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive";
import { SPACINGS_AFTER } from "../common/consts";
import type { Name } from "./types";

import AirportIllustration from ".";

export default {
  title: "AirportIllustration",
};

export const Playground = () => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
  const name = select("Name", NAMES, "BGYFastTrack") as Name;
  const dataTest = text("dataTest", "test");
  const alt = text("alt", "null");
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.SMALL);
  return (
    <AirportIllustration
      size={size}
      name={name}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
      alt={alt}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Explore our new set of Airportillustrations for Kiwi.com.",
  },
};
