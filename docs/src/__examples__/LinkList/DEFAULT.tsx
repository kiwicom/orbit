import * as React from "react";
import { LinkList, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <LinkList>
      <TextLink href="https://orbit.kiwi/components/linklist/" external type="secondary">
        LinkList guidelines
      </TextLink>
      <TextLink href="https://orbit.kiwi/components/linklist/react/" external type="secondary">
        LinkList React API
      </TextLink>
      <TextLink
        href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/LinkList"
        external
        type="secondary"
      >
        LinkList on GitHub
      </TextLink>
    </LinkList>
  ),
  info: {
    title: "Default link list",
    description:
      "By default, link lists show their children in a column with no indent and medium spacing.",
  },
};
