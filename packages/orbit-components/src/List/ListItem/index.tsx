import * as React from "react";

import CircleSmall from "../../icons/CircleSmall";
import type { Props } from "./types";

const ListItem = ({ label, children, icon = <CircleSmall />, dataTest }: Props) => {
  return (
    <li
      data-test={dataTest}
      className="orbit-list-item font-base mb-xxs flex last:m-0 last-of-type:m-0"
    >
      {icon && (
        <div className="orbit-list-item-icon me-xs [&>svg]:h-icon-small [&>svg]:w-icon-small [&>.orbit-carrier-logo]:h-icon-small [&>.orbit-carrier-logo]:w-icon-small [&>.orbit-carrier-logo>img]:h-icon-small [&>.orbit-carrier-logo>img]:w-icon-small flex flex-none items-center">
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
