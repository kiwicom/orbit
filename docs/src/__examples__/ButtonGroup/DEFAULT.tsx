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
  knobs: [
    {
      name: "circled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "size",
      type: "select",
      defaultValue: "normal",
      options: ["small", "normal", "large"],
    },
    {
      name: "type",
      type: "select",
      defaultValue: "primary",
      options: ["primary", "secondary", "critical", "primarySubtle", "criticalSubtle", "white"],
    },
  ],
};
