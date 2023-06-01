"use client";

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

const TabPanel = ({ children, margin, padding, dataTest, active = false }: Props) => {
  const { index, isActive } = usePanel();

  return active || isActive ? (
    <StyledPanel $margin={margin} $padding={padding} id={`panel-${index}`} data-test={dataTest}>
      {children}
    </StyledPanel>
  ) : null;
};

export default TabPanel;
