"use client";

import React from "react";

import type { Props } from "./types";
import { useTabs, TabPanelProvider } from "../../TabContext";

const TabPanels = ({ children, dataTest }: Props) => {
  const { selected } = useTabs();

  return (
    <div className="w-full" data-test={dataTest}>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return null;
        return (
          <TabPanelProvider isActive={selected === idx} index={idx}>
            {child}
          </TabPanelProvider>
        );
      })}
    </div>
  );
};

export default TabPanels;
