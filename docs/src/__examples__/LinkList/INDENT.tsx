import * as React from "react";
import { LinkList, Stack, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack spacing="XXLarge">
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
      <LinkList indent>
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
    </Stack>
  ),
  info: {
    title: "Indent",
    description: "Add extra padding to link list items by passing the <code>indent</code> prop.",
  },
};
