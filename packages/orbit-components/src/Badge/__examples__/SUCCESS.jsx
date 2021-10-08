// @flow
import * as React from "react";

import Badge from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Stack flex>
      <Badge type="success" icon={<Icons.Check ariaLabel="Success" />}>
        Included in price
      </Badge>
      <Badge type="successInverted" icon={<Icons.Check ariaLabel="Success" />}>
        Included in price
      </Badge>
    </Stack>
  ),
  info: {
    title: "Success badges",
    description:
      "Success badges help to highlight something desirable has happened or will happen. You can use them in situations like a confirmation of a user action (such as booking a trip) or potentially attractive options (such as free baggage).",
  },
};
