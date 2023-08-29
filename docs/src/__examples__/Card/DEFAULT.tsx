import React from "react";
import { Card, CardSection, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme} useId={React.useId}>
      <Card title="Passenger info" description="All passengers in this itinerary">
        <CardSection title="Yasmin Karenth" expandable description="1st class" />
      </Card>
    </OrbitProvider>
  ),
  exampleKnobs: [
    {
      component: "Card",
      knobs: [
        { name: "margin", type: "text", defaultValue: "" },
        { name: "loading", type: "boolean", defaultValue: false },
        { name: "title", type: "text", defaultValue: "Passenger info" },
        { name: "description", type: "text", defaultValue: "All passengers in this itinerary" },
      ],
    },
    {
      component: "CardSection",
      knobs: [
        { name: "noSeparator", type: "boolean", defaultValue: false },
        { name: "expandable", type: "boolean", defaultValue: true },
        { name: "initialExpanded", type: "boolean", defaultValue: false },
        { name: "title", type: "text", defaultValue: "Yasmin Karenth" },
        { name: "description", type: "text", defaultValue: "1st class" },
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
