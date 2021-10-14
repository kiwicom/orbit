// @flow
import * as React from "react";

import defaultTheme from "../../defaultTheme";
import Illustration from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: (): React.Node => (
    <Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Extra small
        </Heading>
        <Text>Height: {defaultTheme.orbit.heightIllustrationSmall}</Text>
        <Illustration
          size="extraSmall"
          alt="Jump to the front of the line when boarding"
          name="PriorityBoarding"
        />
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Small
        </Heading>
        <Text>Height: 120px</Text>
        <Illustration
          size="small"
          alt="Jump to the front of the line when boarding"
          name="PriorityBoarding"
        />
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Medium
        </Heading>
        <Text>Height: {defaultTheme.orbit.heightIllustrationMedium}</Text>
        <Illustration
          size="medium"
          alt="Jump to the front of the line when boarding"
          name="PriorityBoarding"
        />
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Large
        </Heading>
        <Text>Height: 280px</Text>
        <Illustration
          size="large"
          alt="Jump to the front of the line when boarding"
          name="PriorityBoarding"
        />
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Display
        </Heading>
        <Text>Height: 460px</Text>
        <Illustration
          size="display"
          alt="Jump to the front of the line when boarding"
          name="PriorityBoarding"
        />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description: "Illustrations come in a variety of sizes.",
  },
};
