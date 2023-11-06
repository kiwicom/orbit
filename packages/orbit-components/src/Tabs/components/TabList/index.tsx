"use client";

import React from "react";
import cx from "clsx";

import Stack from "../../../Stack";
import { TabProvider } from "../../TabContext";
import type { Props } from "./types";

const TabList = ({
  children,
  spacing = "none",
  compact,
  padding,
  margin,
  dataTest,
  fullWidth,
}: Props) => {
  const cssVars = {
    "--tab-list-padding": typeof padding === "string" ? padding : undefined,
    "--tab-list-margin": typeof margin === "string" ? margin : undefined,
    "--tab-list-padding-top": typeof padding === "object" ? padding.top : undefined,
    "--tab-list-padding-right": typeof padding === "object" ? padding.right : undefined,
    "--tab-list-padding-bottom": typeof padding === "object" ? padding.bottom : undefined,
    "--tab-list-padding-left": typeof padding === "object" ? padding.left : undefined,
    "--tab-list-margin-top": typeof margin === "object" ? margin.top : undefined,
    "--tab-list-margin-right": typeof margin === "object" ? margin.right : undefined,
    "--tab-list-margin-bottom": typeof margin === "object" ? margin.bottom : undefined,
    "--tab-list-margin-left": typeof margin === "object" ? margin.left : undefined,
  } as React.CSSProperties;

  return (
    <div
      className={cx(
        fullWidth ? "w-full" : "w-auto",
        cssVars["--tab-list-padding"] && "p-[var(--tab-list-padding)]",
        cssVars["--tab-list-margin"] && "m-[var(--tab-list-margin)]",
        cssVars["--tab-list-padding-top"] && "pt-[var(--tab-list-padding-top)]",
        cssVars["--tab-list-padding-right"] && "pe-[var(--tab-list-padding-right)]",
        cssVars["--tab-list-padding-bottom"] && "pb-[var(--tab-list-padding-bottom)]",
        cssVars["--tab-list-padding-left"] && "ps-[var(--tab-list-padding-left)]",
        cssVars["--tab-list-margin-top"] && "mt-[var(--tab-list-margin-top)]",
        cssVars["--tab-list-margin-right"] && "me-[var(--tab-list-margin-right)]",
        cssVars["--tab-list-margin-bottom"] && "mb-[var(--tab-list-margin-bottom)]",
        cssVars["--tab-list-margin-left"] && "ms-[var(--tab-list-margin-left)]",
      )}
      role="tablist"
      aria-label="tabs"
      data-test={dataTest}
      style={cssVars}
    >
      <Stack flex={fullWidth} spacing={spacing}>
        {React.Children.map(children, (child, idx) => {
          if (!React.isValidElement(child)) return null;
          return (
            // eslint-disable-next-line react/no-array-index-key
            <TabProvider index={idx} key={idx} compact={compact}>
              {child}
            </TabProvider>
          );
        })}
      </Stack>
    </div>
  );
};

export default TabList;
