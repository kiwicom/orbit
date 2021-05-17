import * as React from "react";
import { KiwicomGuarantee } from "@kiwicom/orbit-components/icons";
import { BadgeList, BadgeListItem, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <BadgeList>
      <BadgeListItem type="success" icon={<KiwicomGuarantee />}>
        <TextLink type="secondary">Transfer protected</TextLink> by the Kiwi.com Guarantee
      </BadgeListItem>
    </BadgeList>
  ),
  info: {
    title: "Success badge list item",
    description: "",
  },
};
