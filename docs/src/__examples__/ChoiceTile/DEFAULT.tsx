import React from "react";
import { ChoiceTile, Stack, CountryFlag } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return (
      <Stack>
        <ChoiceTile
          title="Title"
          description="Some additional description"
          icon={<CountryFlag code="anywhere" />}
          label="Label"
          type="radio"
        />
      </Stack>
    );
  },
  exampleKnobs: [
    {
      component: "ChoiceTile",
      knobs: [
        { name: "title", type: "text", defaultValue: "Title" },
        { name: "description", type: "text", defaultValue: "Some additional description" },
        { name: "label", type: "text", defaultValue: "Label" },
        { name: "type", type: "select", options: ["radio", "checkbox"], defaultValue: "radio" },
        { name: "inline", type: "boolean", defaultValue: false },
      ],
    },
  ],
};
