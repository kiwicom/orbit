import * as React from "react";

import Separator from "../Separator";
import ChevronBackward from "../icons/ChevronBackward";
import type { Devices } from "../utils/mediaQuery";

import Hide from ".";

export default {
  title: "Hide",
};

export const WithSeparator = ({ block }) => {
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

WithSeparator.args = {
  block: true,
};

export const Playground = ({
  largeDesktop,
  desktop,
  tablet,
  largeMobile,
  mediumMobile,
  smallMobile,
  block,
}) => {
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

Playground.args = {
  largeDesktop: false,
  desktop: false,
  tablet: false,
  largeMobile: false,
  mediumMobile: false,
  smallMobile: false,
  block: false,
};
