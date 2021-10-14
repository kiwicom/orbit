// @flow
import * as React from "react";

import Heading from "../../Heading";
import RatingStars from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack direction="column">
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Primary
        </Heading>
        <RatingStars rating={3} showEmpty />
      </Stack>
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Secondary
        </Heading>
        <RatingStars color="secondary" rating={3} showEmpty />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Colors",
    description:
      "Ratings stars come in two colors (based on text): primary (the default) and secondary.",
  },
};
