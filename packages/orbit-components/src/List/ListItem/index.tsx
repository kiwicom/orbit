"use client";

import * as React from "react";

import CircleSmall from "../../icons/CircleSmall";
import type { Props } from "./types";

const ListItem = ({ label, children, icon = <CircleSmall ariaHidden />, dataTest }: Props) => {
  return (
    <li data-test={dataTest} className="orbit-list-item font-base flex">
      {icon && (
        <div className="orbit-list-item-icon me-200 [&>.orbit-carrier-logo]:size-icon-small [&>.orbit-carrier-logo>img]:size-icon-small flex flex-none">
          {icon}
        </div>
      )}
      <span className="w-full">
        {label && (
          <div className="orbit-list-item-label font-base text-secondary-foreground font-normal">
            {label}
          </div>
        )}
        {children}
      </span>
    </li>
  );
};

export default ListItem;
