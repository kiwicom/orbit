// @flow
import * as React from "react";

import Badge from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Stack flex>
      <Badge type="neutral" ariaLabel="Train" icon={<Icons.Train />} />
      <Badge type="dark" ariaLabel="Train" icon={<Icons.Train />} />
    </Stack>
  ),
  info: {
    title: "Neutral badges",
    description:
      "Neutral badges present information without adding any emotion. They’re useful when the information is not so important to the user’s main flow.",
  },
};
