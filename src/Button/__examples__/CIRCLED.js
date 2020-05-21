// @flow
import * as React from "react";

import Button from "../index";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Stack spacing="loose">
      <Stack spacing="condensed">
        <Text>How much do you like Orbit?</Text>
        <Stack direction="row">
          <Button type="primarySubtle" circled>1</Button>
          <Button type="primarySubtle" circled>2</Button>
          <Button type="primarySubtle" circled>3</Button>
        </Stack>
      </Stack>
      <Button iconLeft={<Icons.Edit />} circled title="Edit this page" />
    </Stack>
  ),
  info: {
    title: "Circled button",
    description:
      "Circled buttons should be used only with a single number or icon. If using only an icon, remember to include a title.",
  },
};
