// @flow
import * as React from "react";

import Badge from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Stack flex>
      <Badge type="info" ariaLabel="Train" icon={<Icons.Train />} />
      <Badge type="infoInverted" ariaLabel="Train" icon={<Icons.Train />} />
    </Stack>
  ),
  info: {
    title: "Info badges",
    description:
      "Informational badges help to highlight some information as particularly important. They draw attention to the badge without stating whether it was positive or a potential problem.",
  },
};
