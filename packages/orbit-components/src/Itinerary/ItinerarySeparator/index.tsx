"use client";

import * as React from "react";
import cx from "clsx";

import Divider from "./Divider";
import type { Props } from "./types";
import useTheme from "../../hooks/useTheme";

const ItinerarySeparator = ({ children, type, color }: Props) => {
  const theme = useTheme();
  if (children || type)
    return (
      <div className="relative flex w-full justify-center">
        <div
          className={cx(
            "bg-elevation-flat-border-color absolute inset-x-0 top-1/2 z-10 w-full",
            type ? "border" : "h-px",
          )}
          style={{ borderStyle: type, borderColor: color && theme.orbit[color] }}
        />
        <div className="px-50 bg-white-normal relative z-[11] py-0">{children}</div>
      </div>
    );

  return <Divider />;
};

export default ItinerarySeparator;
