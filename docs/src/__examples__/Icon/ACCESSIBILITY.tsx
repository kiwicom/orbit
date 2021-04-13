import * as React from "react";
import { Airplane, Passengers } from "@kiwicom/orbit-components/icons";
import { Stack, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Text>
        <Passengers ariaLabel="Passengers" /> 4
      </Text>
      <Text>
        <Airplane ariaHidden /> Flights
      </Text>
    </Stack>
  ),
  info: {
    title: "Icon accessibility",
    description:
      "When the icon is displaying information not stated in any other way, use ariaLabel to make the same information available to screenreaders. When the icon is just decorative and repeats other information, use ariaHidden to hide it from screenreaders.",
  },
};
