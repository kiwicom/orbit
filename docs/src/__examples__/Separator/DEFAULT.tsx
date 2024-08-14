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
  exampleKnobs: [
    {
      component: "Separator",
      knobs: [
        {
          name: "spaceAfter",
          type: "select",
          defaultValue: "none",
          options: ["none", "smallest", "small", "normal", "medium", "large", "largest"],
        },
        {
          name: "type",
          type: "select",
          defaultValue: "solid",
          options: ["none", "solid", "dashed", "dotted", "double"],
        },
        {
          name: "color",
          type: "text",
          defaultValue: "",
        },
        {
          name: "sideOffset",
          type: "select",
          defaultValue: "none",
          options: ["none", "300", "400", "600", "800", "1000"],
        },
        {
          name: "align",
          type: "select",
          defaultValue: "right",
          options: ["left", "right", "center"],
        },
      ],
    },
  ],
};
