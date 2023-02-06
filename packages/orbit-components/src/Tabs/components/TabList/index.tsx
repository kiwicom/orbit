import React from "react";
import styled, { css } from "styled-components";

import Stack from "../../../Stack";
import { TabProvider } from "../../TabContext";
import type { Props } from "./types";
import { spacingUtility } from "../../../utils/common";

const StyledTabListWrapper = styled.div<{ $margin?: Props["margin"]; $padding?: Props["padding"] }>`
  ${({ $margin, $padding }) => css`
    ${spacingUtility($padding, "padding")};
    ${spacingUtility($margin)};
  `};
`;

const TabList = ({ children, spacing, dataTest, compact, padding, margin }: Props) => {
  return (
    <StyledTabListWrapper role="tablist" aria-label="tabs" $padding={padding} $margin={margin}>
      <Stack inline spacing={spacing} data-test={dataTest}>
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
    </StyledTabListWrapper>
  );
};

export default TabList;
