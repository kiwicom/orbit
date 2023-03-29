import React from "react";
import styled from "styled-components";

import type { Props } from "./types";
import { useTabs, TabPanelProvider } from "../../TabContext";

const StyledTabPanelsWrapper = styled.div`
  width: 100%;
`;

const TabPanels = ({ children, dataTest }: Props) => {
  const { selected } = useTabs();

  return (
    <StyledTabPanelsWrapper data-test={dataTest}>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return null;
        return (
          <TabPanelProvider isActive={selected === idx} index={idx}>
            {child}
          </TabPanelProvider>
        );
      })}
    </StyledTabPanelsWrapper>
  );
};

export default TabPanels;
