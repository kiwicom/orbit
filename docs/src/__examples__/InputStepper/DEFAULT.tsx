import React from "react";
import { InputStepper } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <div style={{ maxWidth: "11em" }}>
      <InputStepper
        label="Travelers"
        minValue={1}
        defaultValue={2}
        maxValue={10}
        titleIncrement="Add a traveler"
        titleDecrement="Remove a traveler"
      />
    </div>
  ),
  exampleKnobs: [
    {
      component: "InputStepper",
      knobs: [
        { name: "defaultValue", type: "number", defaultValue: 2 },
        { name: "minValue", type: "number", defaultValue: 1 },
        { name: "maxValue", type: "number", defaultValue: 10 },
        { name: "step", type: "number", defaultValue: 1 },
        { name: "error", type: "text", defaultValue: "" },
        { name: "help", type: "text", defaultValue: "" },
        { name: "label", type: "text", defaultValue: "Travelers" },
        { name: "required", type: "boolean", defaultValue: false },
        { name: "disabled", type: "boolean", defaultValue: false },
        { name: "size", type: "select", options: ["small", "normal"], defaultValue: "normal" },
      ],
    },
  ],
};
