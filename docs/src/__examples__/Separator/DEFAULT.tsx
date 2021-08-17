import React from "react";
import { Separator, LinkList, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <LinkList>
      <TextLink href="https://orbit.kiwi/components/structure/separator/" external type="secondary">
        Guidelines
      </TextLink>
      <TextLink
        href="https://orbit.kiwi/components/structure/separator/react/"
        external
        type="secondary"
      >
        React API
      </TextLink>
      <Separator />
      <TextLink href="https://orbit.kiwi/getting-started/support/team/" external type="secondary">
        About us
      </TextLink>
      <TextLink href="https://code.kiwi.com/" external type="secondary">
        &gt;code.kiwi.com_
      </TextLink>
      <Separator />
      <TextLink href="https://www.kiwi.com/en/pages/content/terms" external type="secondary">
        Terms of use
      </TextLink>
      <TextLink href="https://www.kiwi.com/pages/content/terms" external type="secondary">
        Privacy policy
      </TextLink>
    </LinkList>
  ),
  info: {
    title: "Default separator",
    description: "Separators present a visual and semantic break between groups of content.",
  },
};
