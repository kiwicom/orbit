import * as React from "react";
import { Stack, Text, Button } from "@kiwicom/orbit-components";
import { Edit } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack spacing="XLarge">
      <Button iconLeft={<Edit />} circled title="Edit this page" />
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
  knobs: [{ name: "leftIcon", type: "icon", defaultValue: false }],
};
