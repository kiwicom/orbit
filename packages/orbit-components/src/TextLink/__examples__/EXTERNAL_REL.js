// @flow
import * as React from "react";

import Stack from "../../Stack";
import TextLink from "../index";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Stack direction="column">
      <TextLink
        href="https://orbit.kiwi"
        external
        iconRight={<Icons.NewWindow ariaLabel="Opens in new window" />}
      >
        Orbit design system
      </TextLink>
      <TextLink
        rel="nofollow"
        external
        href="https://orbit.kiwi"
        iconRight={<Icons.NewWindow ariaLabel="Opens in new window" />}
      >
        Orbit design system
      </TextLink>
      <TextLink rel="noopener" href="https://orbit.kiwi">
        Orbit design system
      </TextLink>
    </Stack>
  ),
  info: {
    title: "External links/rel attribute",
    description:
      "External links automatically have noopener and noreferrer added to the rel attribute for security. If you'd like to add other values to the rel attribute, use the rel prop. Note that the values from external will still be added even if the rel prop is present. So if you don't want to include those values, don't include external.",
  },
};
