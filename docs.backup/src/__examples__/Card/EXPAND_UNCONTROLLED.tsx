import React from "react";
import {
  Card,
  CardSection,
  OrbitProvider,
  Stack,
  Text,
  defaultTheme,
} from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
      <Card title="Passenger info">
        <CardSection expandable title="Yasmin Karenth">
          <Stack direction="column" spacing="200">
            <Text type="secondary">January 20, 1978</Text>
            <Text type="secondary">yas.karenth@example.com</Text>
          </Stack>
        </CardSection>
      </Card>
    </OrbitProvider>
  ),
  exampleKnobs: [
    {
      component: "Card",
      knobs: [
        { name: "loading", type: "boolean", defaultValue: false },
        { name: "title", type: "text", defaultValue: "" },
        { name: "description", type: "text", defaultValue: "" },
      ],
    },
    {
      component: "CardSection",
      knobs: [
        { name: "noSeparator", type: "boolean", defaultValue: false },
        { name: "initialExpanded", type: "boolean", defaultValue: false },
        { name: "expandable", type: "boolean", defaultValue: false },
        { name: "title", type: "text", defaultValue: "Yasmin Karenth" },
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
