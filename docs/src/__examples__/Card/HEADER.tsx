import * as React from "react";
import { Stack, Text, Card, Badge } from "@kiwicom/orbit-components";
import { Airplane, Check } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Card
      icon={<Airplane ariaLabel="Flight" />}
      header={
        <Stack align="center" inline justify="end">
          <Text type="secondary">Trip length: 1h 55min</Text>
          <Badge icon={<Check />} type="success">
            Checked in
          </Badge>
        </Stack>
      }
    />
  ),
  info: {
    title: "Card with custom header",
    description:
      "If you need a different header layout than title and description, you can add it as a custom header.",
  },
};
