import * as React from "react";
import { LinkList, Stack, TextLink } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack spacing="XXLarge">
      <LinkList>
        <TextLink
          href="https://orbit.kiwi/components/navigation/linklist/"
          type="secondary"
          external
          iconRight={<NewWindow ariaLabel="Opens in a new window" />}
        >
          LinkList guidelines
        </TextLink>
        <TextLink
          href="https://orbit.kiwi/components/navigation/linklist/react/"
          type="secondary"
          external
          iconRight={<NewWindow ariaLabel="Opens in a new window" />}
        >
          LinkList React API
        </TextLink>
        <TextLink
          href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/LinkList"
          external
          type="secondary"
          iconRight={<NewWindow ariaLabel="Opens in a new window" />}
        >
          LinkList on GitHub
        </TextLink>
      </LinkList>
      <LinkList indent>
        <TextLink
          href="https://orbit.kiwi/components/navigation/linklist/"
          type="secondary"
          external
          iconRight={<NewWindow ariaLabel="Opens in a new window" />}
        >
          LinkList guidelines
        </TextLink>
        <TextLink
          href="https://orbit.kiwi/components/navigation/linklist/react/"
          type="secondary"
          external
          iconRight={<NewWindow ariaLabel="Opens in a new window" />}
        >
          LinkList React API
        </TextLink>
        <TextLink
          href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/LinkList"
          external
          type="secondary"
          iconRight={<NewWindow ariaLabel="Opens in a new window" />}
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
