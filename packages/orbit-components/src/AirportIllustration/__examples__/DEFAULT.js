// @flow
import * as React from "react";

import AirportIllustration from "../index";

export default {
  Example: (): React.Node => <AirportIllustration name="BUDFastTrack" />,
  info: {
    title: "Default airport illustration",
    description:
      "Airport illustrations by default come in medium. By default, the name of the illustration is used for alt text. Especailly for airport illustrations, this is often not meaningful so include meaningful alt text when appropriate. If the same text is present next to the illustration, use an empty string for the alt prop.",
  },
};
