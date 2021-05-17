import * as React from "react";
import { Clock } from "@kiwicom/orbit-components/icons";
import { BadgeList, BadgeListItem } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <BadgeList>
      <BadgeListItem type="info" icon={<Clock />}>
        5h 45min layover
      </BadgeListItem>
    </BadgeList>
  ),
  info: {
    title: "Info badge list items",
    description: "",
  },
};
