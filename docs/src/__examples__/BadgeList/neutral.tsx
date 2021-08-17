import React from "react";
import { Clock } from "@kiwicom/orbit-components/icons";
import { BadgeList, BadgeListItem } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <BadgeList>
      <BadgeListItem icon={<Clock />}>1h 20min layover</BadgeListItem>
    </BadgeList>
  ),
};
