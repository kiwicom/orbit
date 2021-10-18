// @flow
import * as React from "react";

import Loading from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack direction="column">
      <Loading type="inlineLoader" text="Hang on while we retrieve the best flights" />
      <Loading type="inlineLoader" text="Saving your request" />
      <Loading type="inlineLoader" text="Finding the best routes to get you there" />
    </Stack>
  ),
  info: {
    title: "Text",
    description: "Use text to set user expectations.",
  },
};
