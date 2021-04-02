// @flow
import * as React from "react";

import ButtonLink from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
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
