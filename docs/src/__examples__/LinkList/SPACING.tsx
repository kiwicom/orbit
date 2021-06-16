import * as React from "react";
import { LinkList, Stack, TextLink } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack spacing="XXLarge">
      <LinkList spacing="XXSmall">
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
          type="secondary"
          external
          iconRight={<NewWindow ariaLabel="Opens in a new window" />}
        >
          LinkList on GitHub
        </TextLink>
      </LinkList>
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
      <LinkList spacing="XXLarge">
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
    title: "Spacing",
    description:
      "Control how close the link list items will be with the <code>spacing</code> prop.",
  },
};
