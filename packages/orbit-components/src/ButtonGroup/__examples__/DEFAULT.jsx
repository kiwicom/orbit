// @flow
import * as React from "react";

import Button from "../../Button";
import ButtonGroup from "../index";

export default {
  Example: (): React.Node => (
    <ButtonGroup>
      <Button
        external
        href="https://www.kiwi.com/en/search/results/london-united-kingdom/paris-france/anytime/anytime?bags=1.0&transport=aircraft"
      >
        Check flights
      </Button>
      <Button
        external
        href="https://www.kiwi.com/en/search/results/london-united-kingdom/paris-france/anytime/anytime?bags=1.0&transport=bus"
      >
        Check buses
      </Button>
    </ButtonGroup>
  ),
  info: {
    title: "Default button group",
    description:
      "Button groups visually join their children to show related actions as a single unit.",
  },
};
