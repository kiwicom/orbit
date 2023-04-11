import * as React from "react";
import { boolean } from "@storybook/addon-knobs";

import Separator from "../Separator";
import ChevronBackward from "../icons/ChevronBackward";
import type { Devices } from "../utils/mediaQuery/types";

import Hide from ".";

export default {
  title: "Hide",
};

export const WithSeparator = () => {
  const block = boolean("block", true);
  return (
    <Hide on={["largeMobile"]} block={block}>
      <Separator />
    </Hide>
  );
};

WithSeparator.story = {
  parameters: {
    info: "Configuration with Separator, for separator to work correctly block property has to be set.",
  },
};

export const Playground = () => {
  const largeDesktop = boolean("largeDesktop", false);
  const desktop = boolean("desktop", false);
  const tablet = boolean("tablet", false);
  const largeMobile = boolean("largeMobile", false);
  const mediumMobile = boolean("mediumMobile", false);
  const smallMobile = boolean("smallMobile", false);
  const block = boolean("block", false);

  const on = [
    largeDesktop && "largeDesktop",
    desktop && "desktop",
    tablet && "tablet",
    largeMobile && "largeMobile",
    mediumMobile && "mediumMobile",
    smallMobile && "smallMobile",
  ].filter(item => typeof item === "string") as Devices[];

  return (
    <Hide on={on} block={block}>
      <ChevronBackward />
    </Hide>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
