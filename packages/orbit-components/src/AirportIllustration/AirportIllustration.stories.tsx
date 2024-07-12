import React from "react";

import { NAMES } from "./consts.mts";
import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive";
import { SPACINGS_AFTER } from "../common/consts";
import type { Name } from "./types";

import AirportIllustration from ".";

export default {
  title: "AirportIllustration",
};

export const Playground = ({ size, name, dataTest, spaceAfter, alt }) => {
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

Playground.args = {
  size: SIZE_OPTIONS.MEDIUM,
  name: "BGYFastTrack" as Name,
  dataTest: "test",
  alt: "null",
  spaceAfter: SPACINGS_AFTER.SMALL,
};

Playground.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
  name: {
    options: NAMES,
    control: {
      type: "select",
    },
  },
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
};
