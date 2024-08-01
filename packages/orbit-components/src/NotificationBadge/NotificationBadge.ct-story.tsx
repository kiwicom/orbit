import React from "react";

import { TYPE_OPTIONS } from "../Badge/consts";
import Airplane from "../icons/Airplane";

import NotificationBadge from ".";

export default function NotificationBadgeVisualStory() {
  const types = Object.values(TYPE_OPTIONS);

  return (
    <div className="gap-300 flex flex-wrap">
      {types.map(type => (
        <React.Fragment key={type}>
          <NotificationBadge type={type}>1</NotificationBadge>
          <NotificationBadge type={type}>10</NotificationBadge>
          <NotificationBadge type={type} icon={<Airplane />}>
            10
          </NotificationBadge>
        </React.Fragment>
      ))}
    </div>
  );
}
