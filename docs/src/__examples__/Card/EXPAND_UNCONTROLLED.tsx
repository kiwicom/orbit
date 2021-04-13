import * as React from "react";
import { Card, CardSection, Stack, Text } from "@kiwicom/orbit-components";
import { GenderMan, GenderWoman } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Card title="Passenger info">
      <CardSection
        expandable
        title="Yasmin Karenth"
        icon={<GenderWoman ariaLabel="female" />}
      >
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
  info: {
    title: "Expandable sections – uncontrolled",
    description:
      "Card sections can be set to expand and close on user input without your needing to control the state yourself. It's enough to make the sections expandable.",
  },
};
