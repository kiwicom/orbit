"use client";

import * as React from "react";

import Badge from "../Badge";
import type { Props } from "./types";

const NotificationBadge = ({ type, children, icon, ariaLabel, dataTest, id }: Props) => {
  return (
    <div className="[&_.orbit-badge-primitive]:w-icon-large [&_.orbit-badge-primitive]:p-0">
      <Badge type={type} dataTest={dataTest} id={id} icon={icon} ariaLabel={ariaLabel}>
        {!icon && children}
      </Badge>
    </div>
  );
};

export default NotificationBadge;
