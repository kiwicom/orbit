import React from "react";

import BadgeListItem from "./BadgeListItem";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import Guarantee from "../icons/Guarantee";

import BadgeList from ".";

export default function BadgeListVisualStory() {
  return (
    <div className="space-y-400">
      <div className="space-y-200">
        {Object.values(TYPE_OPTIONS).map(type => (
          <BadgeList>
            <BadgeListItem icon={<Guarantee />} type={type}>
              List type {type} item #1
            </BadgeListItem>
            <BadgeListItem icon={<Guarantee />} type={type}>
              List type {type} item #2
            </BadgeListItem>
          </BadgeList>
        ))}
      </div>

      {Object.values(SIZE_OPTIONS).map(size => (
        <BadgeList>
          <BadgeListItem icon={<Guarantee />} size={size}>
            List size {size} item #1
          </BadgeListItem>
          <BadgeListItem icon={<Guarantee />} size={size}>
            List size {size} item #2
          </BadgeListItem>
        </BadgeList>
      ))}
    </div>
  );
}
