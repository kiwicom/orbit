// @flow
import * as React from "react";

import RatingStars from "../index";

export default {
  Example: () => <RatingStars rating={4} />,
  info: {
    title: "Default rating stars",
    description: "By default, the stars will be small and only the positive rating will be shown.",
  },
};
