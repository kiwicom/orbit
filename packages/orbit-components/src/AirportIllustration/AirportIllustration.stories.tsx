import React from "react";
import { select, text } from "@storybook/addon-knobs";

// @ts-expect-error TODO
import { NAMES } from "./consts.mts";
import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive/consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import IllustrationPrimitiveList from "../primitives/IllustrationPrimitive/IllustrationPrimitiveList";

import AirportIllustration from ".";

export default {
  title: "AirportIllustration",
};

export const Playground = (): React.ReactNode => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
  const name = select("Name", NAMES, "BGYFastTrack");
  const dataTest = text("dataTest", "test");
  const alt = text("alt", "null");
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)], null);
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

export const ListOfAllAirportIllustrations = (): React.ReactNode => {
  return <IllustrationPrimitiveList nameOfComponent="AirportIllustration" images={NAMES} />;
};

ListOfAllAirportIllustrations.story = {
  name: "List of all AirportIllustrations",

  parameters: {
    info: "Explore our new set of Airportillustrations for Kiwi.com.",
  },
};
