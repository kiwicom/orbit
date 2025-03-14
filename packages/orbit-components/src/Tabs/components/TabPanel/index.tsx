"use client";

import React from "react";
import cx from "clsx";

import { usePanel } from "../../TabContext";
import type { Props } from "./types";

const TabPanel = ({ children, margin, padding, dataTest, active = false }: Props) => {
  const { index, isActive } = usePanel();

  const cssVars = {
    "--tab-panel-padding": typeof padding === "string" ? padding : undefined,
    "--tab-panel-margin": typeof margin === "string" ? margin : undefined,
    "--tab-panel-padding-top": typeof padding === "object" ? padding.top : undefined,
    "--tab-panel-padding-right": typeof padding === "object" ? padding.right : undefined,
    "--tab-panel-padding-bottom": typeof padding === "object" ? padding.bottom : undefined,
    "--tab-panel-padding-left": typeof padding === "object" ? padding.left : undefined,
    "--tab-panel-margin-top": typeof margin === "object" ? margin.top : undefined,
    "--tab-panel-margin-right": typeof margin === "object" ? margin.right : undefined,
    "--tab-panel-margin-bottom": typeof margin === "object" ? margin.bottom : undefined,
    "--tab-panel-margin-left": typeof margin === "object" ? margin.left : undefined,
  } as React.CSSProperties;

  return active || isActive ? (
    <div
      className={cx(
        cssVars["--tab-panel-padding"] && "p-[var(--tab-panel-padding)]",
        cssVars["--tab-panel-margin"] && "m-[var(--tab-panel-margin)]",
        cssVars["--tab-panel-padding-top"] && "pt-[var(--tab-panel-padding-top)]",
        cssVars["--tab-panel-padding-right"] && "pe-[var(--tab-panel-padding-right)]",
        cssVars["--tab-panel-padding-bottom"] && "pb-[var(--tab-panel-padding-bottom)]",
        cssVars["--tab-panel-padding-left"] && "ps-[var(--tab-panel-padding-left)]",
        cssVars["--tab-panel-margin-top"] && "mt-[var(--tab-panel-margin-top)]",
        cssVars["--tab-panel-margin-right"] && "me-[var(--tab-panel-margin-right)]",
        cssVars["--tab-panel-margin-bottom"] && "mb-[var(--tab-panel-margin-bottom)]",
        cssVars["--tab-panel-margin-left"] && "ms-[var(--tab-panel-margin-left)]",
      )}
      style={cssVars}
      id={`panel-${index}`}
      data-test={dataTest}
      role="tabpanel"
      aria-labelledby={`tab-${index}`}
    >
      {children}
    </div>
  ) : null;
};

export default TabPanel;
