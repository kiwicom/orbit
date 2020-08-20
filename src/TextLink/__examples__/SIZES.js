// @flow
import * as React from "react";

import Heading from "../../Heading";
import Stack from "../../Stack";
import Text from "../../Text";
import TextLink from "../index";

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
  info: {
    title: "Sizes",
    description:
      "By default, text links inherit the size of their parent. If you are using them outside a Text component and need to specify the size, there are three available: small, normal, and large.",
  },
};
