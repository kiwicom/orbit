import * as React from "react";
import { AlertCircle, BaggageSet, Clock } from "@kiwicom/orbit-components/icons";
import { BadgeList, BadgeListItem } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <BadgeList>
      <BadgeListItem icon={<AlertCircle ariaLabel="Warning" />}>
        You&apos;re departing from a different place
      </BadgeListItem>
      <BadgeListItem type="warning" icon={<BaggageSet />}>
        You must collect and recheck your baggage
      </BadgeListItem>
      <BadgeListItem icon={<Clock />}>3h 20min layover</BadgeListItem>
    </BadgeList>
  ),
};
