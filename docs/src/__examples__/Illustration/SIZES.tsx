import React from "react";
import { Illustration, Heading, Stack, Text } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => (
    <Stack>
      <Stack spacing="100">
        <Heading as="h3" type="title3">
          Extra small
        </Heading>
        <Text>Height: {defaultTheme.orbit.illustrationExtraSmallHeight}</Text>
        <Illustration
          size="extraSmall"
          alt="Jump to the front of the line when boarding"
          name="PriorityBoarding"
        />
      </Stack>
      <Stack spacing="100">
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
      <Stack spacing="100">
        <Heading as="h3" type="title3">
          Medium
        </Heading>
        <Text>Height: {defaultTheme.orbit.illustrationMediumHeight}</Text>
        <Illustration
          size="medium"
          alt="Jump to the front of the line when boarding"
          name="PriorityBoarding"
        />
      </Stack>
      <Stack spacing="100">
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
      <Stack spacing="100">
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
};
