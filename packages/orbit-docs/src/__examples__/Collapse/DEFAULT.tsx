import React from "react";
import { Collapse, Text, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Collapse label="Principle for collapses">
      <Text>
        Collapse components help with{" "}
        <TextLink external href="https://orbit.kiwi/guides/progressive-disclosure/">
          progressive disclosure
        </TextLink>
        , ensuring users don&apos;t get overwhelmed by too much information or too many choices at
        once.
      </Text>
    </Collapse>
  ),
  exampleKnobs: [
    {
      component: "Collapse",
      knobs: [
        { name: "label", type: "text", defaultValue: "Principle for collapses" },
        { name: "initialExpanded", type: "boolean", defaultValue: false },
      ],
    },
  ],
};
