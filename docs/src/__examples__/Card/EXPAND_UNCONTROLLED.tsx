import React from "react";
import { Card, CardSection, Stack, Text } from "@kiwicom/orbit-components";
import { GenderMan, GenderWoman } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Card title="Passenger info">
      <CardSection expandable title="Yasmin Karenth" icon={<GenderWoman ariaLabel="female" />}>
        <Stack direction="column" spacing="XSmall">
          <Text type="secondary">January 20, 1978</Text>
          <Text type="secondary">yas.karenth@example.com</Text>
        </Stack>
      </CardSection>
      <CardSection expandable title="Robin Kask" icon={<GenderMan ariaLabel="male" />}>
        <Stack direction="column" spacing="XSmall">
          <Text type="secondary">June 11, 1985</Text>
          <Text type="secondary">robin2fly@example.com</Text>
        </Stack>
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
