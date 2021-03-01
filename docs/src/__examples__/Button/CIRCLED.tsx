import * as React from "react";
import { Stack, Text, Button } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

export default {
  Example: () => (
    <Stack spacing="XLarge">
      <Button iconLeft={<Icons.Edit />} circled title="Edit this page" />
      <Stack spacing="XSmall">
        <Text>How much do you like Orbit?</Text>
        <Stack direction="row">
          <Button type="primarySubtle" circled iconLeft="1" />
          <Button type="primarySubtle" circled iconLeft="2" />
          <Button type="primarySubtle" circled iconLeft="3" />
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Circled button",
    description:
      "Circled buttons should be used only with an icon or a single number. If using only an icon, remember to include a title.",
  },
};
