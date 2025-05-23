import React from "react";
import { LinkList, TextLink } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
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
  ),
  exampleKnobs: [
    {
      component: "LinkList",
      knobs: [
        { name: "indent", type: "boolean", defaultValue: false },
        {
          name: "direction",
          type: "select",
          defaultValue: "row",
          options: ["row", "column"],
        },
        {
          name: "spacing",
          type: "select",
          defaultValue: "400",
          options: ["none", "50", "100", "200", "300", "400", "600", "800", "1000"],
        },
      ],
    },
  ],
};
