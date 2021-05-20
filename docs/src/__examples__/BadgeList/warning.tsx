import * as React from "react";
import { AlertCircle } from "@kiwicom/orbit-components/icons";
import { BadgeList, BadgeListItem } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <BadgeList>
      <BadgeListItem type="warning" icon={<AlertCircle ariaLabel="Warning" />}>
        You&apos;re departing from a different place
      </BadgeListItem>
    </BadgeList>
  ),
  info: {
    title: "Warning badge list item",
    description: "",
  },
};
