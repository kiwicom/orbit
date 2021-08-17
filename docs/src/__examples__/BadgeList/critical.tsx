import React from "react";
import { Clock } from "@kiwicom/orbit-components/icons";
import { BadgeList, BadgeListItem } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <BadgeList>
      <BadgeListItem type="critical" icon={<Clock />}>
        The layover in Vienna is too short
      </BadgeListItem>
    </BadgeList>
  ),
};
