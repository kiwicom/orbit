import React from "react";
import styled, { css } from "styled-components";

import Button from "../../../Button";
import type * as Common from "../../../common/types";
import defaultTheme from "../../../defaultTheme";

const StyledWrapper = styled.div<{
  expanded: boolean;
  "data-test"?: string | boolean;
}>`
  ${({ theme, expanded }) => css`
    display: flex;
    padding: ${theme.orbit.spaceLarge};
    background-color: ${theme.orbit.paletteWhite};
    align-items: center;
    min-height: ${expanded ? "19px" : "44px"};
    transition: max-height ${theme.orbit.durationFast} ease-in-out;
  `};
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const HeaderContent = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const HeaderActions = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.orbit.spaceLarge};
`;

HeaderActions.defaultProps = {
  theme: defaultTheme,
};

interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly expanded: boolean;
  readonly expandable: boolean;
  readonly onExpand?: Common.Callback;
  readonly actions?: React.ReactNode;
}

const AccordionSectionHeader = ({
  children,
  actions,
  expanded,
  onExpand,
  expandable,
  dataTest,
}: Props) => (
  <StyledWrapper expanded={expanded} data-test={dataTest && `${dataTest}Header`}>
    <HeaderContent>{children}</HeaderContent>
    {!expanded && (
      <HeaderActions>
        {expandable &&
          (actions || (
            <Button onClick={onExpand} type="secondary">
              Open
            </Button>
          ))}
      </HeaderActions>
    )}
  </StyledWrapper>
);

export default AccordionSectionHeader;
