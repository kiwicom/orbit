// @flow
import * as React from "react";

import ButtonGroup from "../index";
import ButtonLink from "../../Button";

export default {
  Example: (): React.Node => (
    <ButtonGroup>
      <ButtonLink
        external
        href="https://www.kiwi.com/en/search/results/london-united-kingdom/paris-france/anytime/anytime?bags=1.0&transport=aircraft"
      >
        Check flights
      </ButtonLink>
      <ButtonLink
        external
        href="https://www.kiwi.com/en/search/results/london-united-kingdom/paris-france/anytime/anytime?bags=1.0&transport=bus"
      >
        Check buses
      </ButtonLink>
    </ButtonGroup>
  ),
  info: {
    title: "Button group with button links",
    description: "Button groups can join together less important actions as button links.",
  },
};
