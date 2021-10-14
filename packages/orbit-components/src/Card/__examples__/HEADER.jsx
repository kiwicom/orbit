// @flow
import * as React from "react";

import Badge from "../../Badge";
import Card from "../index";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
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
