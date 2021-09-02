import React from "react";
import { Heading, Stack, Text, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Heading type="title3" as="h3">
        Inherited
      </Heading>
      <Stack flex>
        <Stack>
          <Heading type="title4" as="h4">
            Small
          </Heading>
          <Text size="small">
            Find out more about the{" "}
            <TextLink href="https://orbit.kiwi">Orbit design system</TextLink>.
          </Text>
        </Stack>
        <Stack>
          <Heading type="title4" as="h4">
            Normal
          </Heading>
          <Text size="normal">
            Find out more about the{" "}
            <TextLink href="https://orbit.kiwi">Orbit design system</TextLink>.
          </Text>
        </Stack>
        <Stack>
          <Heading type="title4" as="h4">
            Large
          </Heading>
          <Text size="large">
            Find out more about the{" "}
            <TextLink href="https://orbit.kiwi">Orbit design system</TextLink>.
          </Text>
        </Stack>
      </Stack>
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Explicit
        </Heading>
        <Stack flex>
          <Stack>
            <Heading type="title4" as="h4">
              Small
            </Heading>
            <TextLink size="small" href="https://orbit.kiwi">
              Orbit design system
            </TextLink>
          </Stack>
          <Stack>
            <Heading type="title4" as="h4">
              Normal
            </Heading>
            <TextLink size="normal" href="https://orbit.kiwi">
              Orbit design system
            </TextLink>
          </Stack>
          <Stack>
            <Heading type="title4" as="h4">
              Large
            </Heading>
            <TextLink size="large" href="https://orbit.kiwi">
              Orbit design system
            </TextLink>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ),
};
