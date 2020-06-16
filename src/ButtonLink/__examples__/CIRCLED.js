// @flow
import * as React from "react";

import ButtonLink from "../index";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Stack spacing="loose">
      <ButtonLink iconLeft={<Icons.Edit />} circled title="Edit this page" />
      <Stack spacing="condensed">
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
