import React from "react";

import BadgeListItem from "./BadgeListItem";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import KiwicomGuarantee from "../icons/KiwicomGuarantee";

import BadgeList from ".";

export default function BadgeListVisualStory() {
  return (
    <div className="space-y-400">
      <div className="space-y-200">
        {Object.values(TYPE_OPTIONS).map(type => (
          <BadgeList>
            <BadgeListItem icon={<KiwicomGuarantee />} type={type}>
              List type {type} item #1
            </BadgeListItem>
            <BadgeListItem icon={<KiwicomGuarantee />} type={type}>
              List type {type} item #2
            </BadgeListItem>
          </BadgeList>
        ))}
      </div>

      {Object.values(SIZE_OPTIONS).map(size => (
        <BadgeList>
          <BadgeListItem icon={<KiwicomGuarantee />} size={size}>
            List size {size} item #1
          </BadgeListItem>
          <BadgeListItem icon={<KiwicomGuarantee />} size={size}>
            List size {size} item #2
          </BadgeListItem>
        </BadgeList>
      ))}
    </div>
  );
}
