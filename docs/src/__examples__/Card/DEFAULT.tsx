import React from "react";
import { Card, CardSection, Inline } from "@kiwicom/orbit-components";
import { GenderWoman } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Card title="Passenger info" description="All passengers in this itinerary">
      <CardSection>
        <Inline>
          <GenderWoman ariaLabel="female" />
          Yasmin Karenth
        </Inline>
      </CardSection>
    </Card>
  ),
  exampleKnobs: [
    {
      component: "Card",
      knobs: [
        { name: "icon", type: "icon", defaultValue: "" },
        { name: "loading", type: "boolean", defaultValue: false },
        { name: "noSeparator", type: "boolean", defaultValue: false },
        { name: "initialExpanded", type: "boolean", defaultValue: false },
        { name: "expandable", type: "boolean", defaultValue: false },
        { name: "title", type: "text", defaultValue: "Passenger info" },
        { name: "description", type: "text", defaultValue: "All passengers in this itinerary" },
        {
          name: "titleAs",
          type: "select",
          defaultValue: "h2",
          options: ["h1", "h2", "h3", "h4", "h5", "h6", "div"],
        },
      ],
    },
  ],
};
