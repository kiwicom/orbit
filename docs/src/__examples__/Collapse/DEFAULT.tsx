import React from "react";
import { Collapse, OrbitProvider, Text, TextLink, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme} useId={React.useId}>
      <Collapse
        label="Principle for collapses"
        expandButtonLabel="Expand"
        collapseButtonLabel="Collapse"
      >
        <Text>
          Collapse components help with{" "}
          <TextLink external href="https://orbit.kiwi/guides/progressive-disclosure/">
            progressive disclosure
          </TextLink>
          , ensuring users don&apos;t get overwhelmed by too much information or too many choices at
          once.
        </Text>
      </Collapse>
    </OrbitProvider>
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
