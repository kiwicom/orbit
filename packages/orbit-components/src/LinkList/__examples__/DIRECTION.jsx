// @flow
import * as React from "react";

import LinkList from "../index";
import Stack from "../../Stack";
import TextLink from "../../TextLink";

export default {
  Example: (): React.Node => (
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
      <LinkList direction="row">
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
    title: "Direction",
    description: "Link lists can dislay their children either as a column (the default) or a row.",
  },
};
