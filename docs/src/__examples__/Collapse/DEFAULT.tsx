import * as React from "react";
import { Collapse, Text, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Collapse label="Collapse principles">
      <Text>
        Collapse components help with{" "}
        <TextLink external href="https://orbit.kiwi/guides/progressive-disclosure/">
          progressive disclosure
        </TextLink>
        , ensuring users don&apos;t get overwhelmed by too much information or too many choices at
        once.
      </Text>
    </Collapse>
  ),
  info: {
    title: "Default collapse",
    description:
      "A collapse requires a label to describe what it's hiding and children to hide. By default, it is closed on initial load.",
  },
};
