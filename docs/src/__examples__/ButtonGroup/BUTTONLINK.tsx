import * as React from "react";
import { ButtonGroup, ButtonLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
