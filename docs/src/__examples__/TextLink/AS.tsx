import * as React from "react";
import * as Icons from "@kiwicom/orbit-components/icons";
import { Heading, Stack, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack>
        <Heading type="title3" as="h3">
          Default as <code>a</code>
        </Heading>
        <TextLink
          href="https://orbit.kiwi"
          external
          iconRight={<Icons.NewWindow ariaLabel="Opens in new window" />}
        >
          Orbit design system
        </TextLink>
      </Stack>
      <Stack>
        <Heading type="title3" as="h3">
          As <code>div</code>
        </Heading>
        <TextLink
          asComponent="div"
          onClick={() => {
            window.open("https://orbit.kiwi", "_blank", "noopener,noreferrer");
          }}
          tabIndex={0}
          iconRight={<Icons.NewWindow ariaLabel="Opens in new window" />}
        >
          Orbit design system
        </TextLink>
      </Stack>
    </Stack>
  ),
  info: {
    title: "As",
    description:
      "By default, text links render as a elements. You can set them to any other element you wish, including your own components. Be aware that you will have to control the functionality yourself as it won't be added automatically.",
  },
};
