// @flow
import * as React from "react";

import IllustrationPrimitive from "../index";

export default {
  Example: () => <IllustrationPrimitive name="Accommodation" />,
  info: {
    title: "Default illustration primitive",
    description:
      "Illustration primitives by default come in medium. By default, the name of the illustration is used for alt text. This might not be meaningful so include meaningful alt text when appropriate. If the same text is present next to the illustration, use an empty string for the alt prop.",
  },
};
