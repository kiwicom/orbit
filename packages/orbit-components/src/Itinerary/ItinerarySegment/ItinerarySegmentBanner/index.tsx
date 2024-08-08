"use client";

import * as React from "react";
import cx from "clsx";

import handleKeyDown from "../../../utils/handleKeyDown";
import ChevronForward from "../../../icons/ChevronForward";
import type { Props } from "./types";

const ItinerarySegmentBanner = ({ onClick, children }: Props) => {
  return (
    <div
      className={cx(
        "px-400 box-border flex w-full items-center justify-between overflow-hidden py-0",
        onClick ? "cursor-pointer" : "cursor-default",
        "[&_.orbit-itinerary-badge-list]:!ms-0",
        "[&_.orbit-separator]:-ml-400 [&_.orbit-separator]:!w-[150%]",
        "[&_>_div]:max-w-[calc(100%-20px)]",
      )}
      role="button"
      tabIndex={onClick ? 0 : -1}
      onKeyDown={handleKeyDown(onClick)}
      onClick={ev => {
        ev.stopPropagation();
        if (onClick) onClick(ev);
      }}
    >
      <div>{children}</div>
      {onClick && <ChevronForward color="secondary" />}
    </div>
  );
};

export default ItinerarySegmentBanner;
