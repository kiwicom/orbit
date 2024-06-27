"use client";

import * as React from "react";
import cx from "clsx";

import BadgeList from "../../BadgeList";
import { useItinerarySegmentMinimalColumnWidth } from "../context";
import ItineraryBadgeListItem from "./ItineraryBadgeListItem";
import type { Props } from "./types";
import { spaceAfterClasses } from "../../common/tailwind";
import useTheme from "../../hooks/useTheme";

const ItineraryBadgeList = ({ children, spaceAfter, ...props }: Props) => {
  const { itinerarySegmentMinimalColumnWidth: offset } = useItinerarySegmentMinimalColumnWidth();
  const theme = useTheme();
  return (
    <div
      className={cx("orbit-itinerary-badge-list", spaceAfter && spaceAfterClasses[spaceAfter])}
      style={{ marginInlineStart: `${2 * parseInt(theme.orbit.spaceSmall, 10) + offset}px` }}
    >
      <BadgeList {...props}>{children}</BadgeList>
    </div>
  );
};

export default ItineraryBadgeList;
export { ItineraryBadgeListItem };
