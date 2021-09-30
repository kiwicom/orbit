import React from "react";
import { RatingStars } from "@kiwicom/orbit-components";

export default {
  Example: () => <RatingStars size="medium" rating={3} showEmpty />,
  exampleVariants: [
    { name: "Small", code: `() => () => <RatingStars size="small" rating={3} showEmpty />` },
    { name: "Medium", code: `() => () => <RatingStars size="medium" rating={3} showEmpty />` },
    { name: "Large", code: `() => () => <RatingStars size="large" rating={3} showEmpty />,` },
  ],
};
