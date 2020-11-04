// @flow
import * as React from "react";

import defaultTheme from "../../defaultTheme";
import AirportIllustration from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: () => (
    <Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Extra small
        </Heading>
        <Text>Height: {defaultTheme.orbit.heightIllustrationSmall}</Text>
        <AirportIllustration
          size="extraSmall"
          alt="Follow all directions for priority security lanes"
          name="BUDFastTrack"
        />
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Small
        </Heading>
        <Text>Height: 120px</Text>
        <AirportIllustration
          size="small"
          alt="Follow all directions for priority security lanes"
          name="BUDFastTrack"
        />
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Medium
        </Heading>
        <Text>Height: {defaultTheme.orbit.heightIllustrationMedium}</Text>
        <AirportIllustration
          size="medium"
          alt="Follow all directions for priority security lanes"
          name="BUDFastTrack"
        />
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Large
        </Heading>
        <Text>Height: 280px</Text>
        <AirportIllustration
          size="large"
          alt="Follow all directions for priority security lanes"
          name="BUDFastTrack"
        />
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Display
        </Heading>
        <Text>Height: 460px</Text>
        <AirportIllustration
          size="display"
          alt="Follow all directions for priority security lanes"
          name="BUDFastTrack"
        />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description: "Airport illustrations come in a variety of sizes.",
  },
};
