import React from "react";
import styled, { css } from "styled-components";

import { spacingUtility } from "../../../utils/common";
import { usePanel } from "../../TabContext";
import type { Props } from "./types";

const StyledPanel = styled.div<{ $margin?: Props["margin"]; $padding?: Props["padding"] }>`
  ${({ $margin, $padding }) => css`
    ${spacingUtility($padding, "padding")};
    ${spacingUtility($margin)};
  `};
`;

const TabPanel = ({ children, margin, padding, dataTest }: Props) => {
  const { index } = usePanel();

  return (
    <StyledPanel $margin={margin} $padding={padding} id={`panel-${index}`} data-test={dataTest}>
      {children}
    </StyledPanel>
  );
};

export default TabPanel;
