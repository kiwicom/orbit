import React from "react";
import { RatingStars } from "@kiwicom/orbit-components";

export default {
  Example: () => <RatingStars rating={3} showEmpty />,
  exampleVariants: [
    { name: "Primary", code: `() => () => <RatingStars color="primary" rating={3} showEmpty />` },
    {
      name: "Secondary",
      code: `() => () => <RatingStars color="secondary" rating={3} showEmpty />`,
    },
  ],
};
