import React from "react";
import { Card, CardSection } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Card title="Passenger info" description="All passengers in this itinerary">
      <CardSection title="Yasmin Karenth" description="1st class" />
    </Card>
  ),
  exampleKnobs: [
    {
      component: "Card",
      knobs: [
        { name: "icon", type: "icon", defaultValue: "" },
        { name: "loading", type: "boolean", defaultValue: false },
        { name: "title", type: "text", defaultValue: "Passenger info" },
        { name: "description", type: "text", defaultValue: "All passengers in this itinerary" },
      ],
    },
    {
      component: "CardSection",
      knobs: [
        { name: "icon", type: "icon", defaultValue: "" },
        { name: "noSeparator", type: "boolean", defaultValue: false },
        { name: "initialExpanded", type: "boolean", defaultValue: false },
        { name: "title", type: "text", defaultValue: "" },
        { name: "description", type: "text", defaultValue: "" },
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
