// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import Separator from "../Separator";
import ChevronLeft from "../icons/ChevronLeft";

import Hide from ".";

storiesOf("Hide", module)
  .add(
    "With Separator",
    () => {
      const block = boolean("block", true);
      return (
        <Hide on={["largeMobile"]} block={block}>
          <Separator />
        </Hide>
      );
    },
    {
      info:
        "Configuration with Separator, for separator to work correctly block property has to be set.",
    },
  )
  .add(
    "Playground",
    () => {
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
      ].filter(item => typeof item === "string");

      return (
        <Hide on={on} block={block}>
          <ChevronLeft />
        </Hide>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );
