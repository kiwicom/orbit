// @flow
import * as React from "react";

import Button from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Stack direction="row">
      <Button href="/" title="Homepage">
        Go home
      </Button>
      <Button asComponent="div" href="/" title="Homepage">
        Go home
      </Button>
      <Button
        external
        href="https://orbit.kiwi/components/button/"
        iconRight={<Icons.ChevronRight />}
        title="Opens in new window"
      >
        Read the docs
      </Button>
    </Stack>
  ),
  info: {
    title: "Circled button",
    description:
      "1. When buttons have an *href* prop, they are automatically rendered as <a> elements. 2. You can override this using an *asComponent* prop. 3. Buttons marked as *external* automatically open in a new window with *noopener noreferrer* as the *rel* attribute for security.",
  },
};
