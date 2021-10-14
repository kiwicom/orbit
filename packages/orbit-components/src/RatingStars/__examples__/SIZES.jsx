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
          Small
        </Heading>
        <RatingStars rating={3} showEmpty />
      </Stack>
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Medium
        </Heading>
        <RatingStars size="medium" rating={3} showEmpty />
      </Stack>
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Large
        </Heading>
        <RatingStars size="large" rating={3} showEmpty />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description: "The stars can be small (the default), medium, or large.",
  },
};
