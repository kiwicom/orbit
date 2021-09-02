import React from "react";
import { Heading, Stack, RatingStars } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
