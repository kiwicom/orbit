import * as React from "react";
import { Stack, ButtonLink } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack direction="row">
      <ButtonLink href="/" title="Homepage">
        Go home
      </ButtonLink>
      <ButtonLink asComponent="div" href="/" title="Homepage">
        Go home
      </ButtonLink>
      <ButtonLink
        external
        href="https://orbit.kiwi/components/buttonlink/"
        iconRight={<Icons.ChevronRight />}
        title="Opens in new window"
      >
        Read the docs
      </ButtonLink>
    </Stack>
  ),
  info: {
    title: "Button links as links",
    description:
      "1. When button links have an *href* prop, they are automatically rendered as <a> elements. 2. You can override this using an *asComponent* prop. 3. Button links marked as *external* automatically open in a new window with *noopener noreferrer* as the *rel* attribute for security.",
  },
};
