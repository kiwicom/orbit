import * as React from "react";
import { ButtonGroup, Button } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
};
