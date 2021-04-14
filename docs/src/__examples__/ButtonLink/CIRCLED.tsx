import * as React from "react";
import { Edit } from "@kiwicom/orbit-components/icons";
import { Stack, Text, ButtonLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack spacing="XLarge">
      <ButtonLink iconLeft={<Edit />} circled title="Edit this page" />
      <Stack spacing="XSmall">
        <Text>How much do you like Orbit?</Text>
        <Stack direction="row">
          <ButtonLink circled iconLeft="1" />
          <ButtonLink circled iconLeft="2" />
          <ButtonLink circled iconLeft="3" />
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Circled button link",
    description:
      "Circled button links should be used only with an icon or a single number. If using only an icon, remember to include a title.",
  },
};
