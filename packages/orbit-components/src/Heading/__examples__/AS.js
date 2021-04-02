// @flow
import * as React from "react";

import Heading from "../index";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: (): React.Node => (
    <Stack>
      <Heading type="display" as="h1">
        Orbit design system
      </Heading>
      <Heading type="title2" as="h2">
        Components
      </Heading>
      <Text>Orbit offers many components to create travel apps.</Text>
      <Heading type="title2" as="h2">
        Utilities
      </Heading>
      <Text>There are also utilities to simplify development.</Text>
    </Stack>
  ),
  info: {
    title: "Heading elements",
    description:
      "When adding structure to your content, it's important that it's not represented only visually. Make the structure accessible to everyone by rendering your headings as elements in the proper hierarchy.",
  },
};
