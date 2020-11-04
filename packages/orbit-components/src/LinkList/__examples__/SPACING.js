// @flow
import * as React from "react";

import LinkList from "../index";
import Stack from "../../Stack";
import TextLink from "../../TextLink";

export default {
  Example: () => (
    <Stack spacing="XXLarge">
      <LinkList spacing="XXSmall">
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
      <LinkList spacing="XXLarge">
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
    title: "Spacing",
    description:
      "Control how close the link list items will be with the <code>spacing</code> prop.",
  },
};
