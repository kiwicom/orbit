import * as React from "react";
import { RatingStars } from "@kiwicom/orbit-components";

export default {
  Example: () => <RatingStars rating={3} showEmpty />,
  info: {
    title: "Show empty stars",
    description: "To display stars that were not given, use the <code>showEmpty</code> prop.",
  },
};
