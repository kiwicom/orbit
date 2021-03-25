// @flow
import * as React from "react";

import * as Icons from "../../icons";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: (): React.Node => (
    <Stack>
      <Text>
        <Icons.Passengers ariaLabel="Passengers" /> 4
      </Text>
      <Text>
        <Icons.Airplane ariaHidden /> Flights
      </Text>
    </Stack>
  ),
  info: {
    title: "Icon accessibility",
    description:
      "When the icon is displaying information not stated in any other way, use ariaLabel to make the same information available to screenreaders. When the icon is just decorative and repeats other information, use ariaHidden to hide it from screenreaders.",
  },
};
