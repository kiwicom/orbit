import * as React from "react";
import { Stack, Text, Card, Badge } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Card
      icon={<Icons.Airplane ariaLabel="Flight" />}
      header={
        <Stack align="center" inline justify="end">
          <Text type="secondary">Trip length: 1h 55min</Text>
          <Badge icon={<Icons.Check />} type="success">
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
