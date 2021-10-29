import React from "react";
import { BadgeList, BadgeListItem } from "@kiwicom/orbit-components";
import { CheckCircle } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    return (
      <BadgeList>
        <BadgeListItem type="success" icon={<CheckCircle />}>
          Transfer protected
        </BadgeListItem>
      </BadgeList>
    );
  },
  exampleVariants: [
    {
      name: "Success",
      code: `() => (
      <BadgeList>
        <BadgeListItem type="success" icon={<Icons.CheckCircle />}>
          Transfer protected by the Kiwi.com Guarantee
        </BadgeListItem>
    </BadgeList>
    )`,
    },
    {
      name: "Neutral",
      code: `() => (
      <BadgeList>
        <BadgeListItem type="neutral" icon={<Icons.Clock />}>
          1h 20min layover
        </BadgeListItem>
    </BadgeList>
    )`,
    },
    {
      name: "Info",
      code: `() => (
      <BadgeList>
        <BadgeListItem type="info" icon={<Icons.Clock />}>
          5h 45min layover
        </BadgeListItem>
    </BadgeList>
    )`,
    },
    {
      name: "Warning",
      code: `() => (
      <BadgeList>
      <BadgeListItem type="warning" icon={<Icons.AlertCircle />}>
        You're departing from a different place
      </BadgeListItem>
    </BadgeList>
    )`,
    },
    {
      name: "Critical",
      code: `() => (
      <BadgeList>
        <BadgeListItem type="critical" icon={<Icons.Clock />}>
          The layover in Vienna is too short
        </BadgeListItem>
    </BadgeList>
    )`,
    },
  ],
};
