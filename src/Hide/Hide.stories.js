// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import ChevronLeft from "../icons/ChevronLeft";

import Hide from "./";

storiesOf("Hide", module).add(
  "Playground",
  () => {
    const largeDesktop = boolean("largeDesktop", false);
    const desktop = boolean("desktop", false);
    const tablet = boolean("tablet", false);
    const largeMobile = boolean("largeMobile", false);
    const mediumMobile = boolean("mediumMobile", false);
    const smallMobile = boolean("smallMobile", false);

    const on = [
      largeDesktop && "largeDesktop",
      desktop && "desktop",
      tablet && "tablet",
      largeMobile && "largeMobile",
      mediumMobile && "mediumMobile",
      smallMobile && "smallMobile",
    ].filter(item => typeof item === "string");

    return (
      <Hide on={on}>
        <ChevronLeft />
      </Hide>
    );
  },
  {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
);
