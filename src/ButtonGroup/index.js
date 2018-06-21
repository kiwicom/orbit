// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { StyledButtonLink } from "../ButtonLink";
import { StyledButton } from "../Button";

import type { Props } from "./index";

const StyledButtonGroup = styled.div`
  display: flex;

  & ${StyledButtonLink}, & ${StyledButton} {
    border-radius: ${({ connected }) => connected && "0"};
    margin-right: ${({ theme, connected }) => (connected ? "1px" : theme.orbit.spaceXSmall)};

    &:first-child {
      border-radius: ${({ connected, theme }) =>
        connected &&
        `${theme.orbit.borderRadiusNormal} 0 0
          ${theme.orbit.borderRadiusNormal}`};
    }

    &:last-child {
      border-radius: ${({ connected, theme }) =>
        connected && `0 ${theme.orbit.borderRadiusNormal} ${theme.orbit.borderRadiusNormal} 0`};
      margin-right: 0;
    }
  }
`;

StyledButtonGroup.defaultProps = {
  theme: defaultTokens,
};

const ButtonGroup = ({ children, connected }: Props) => (
  <StyledButtonGroup connected={connected}>{children}</StyledButtonGroup>
);

export default ButtonGroup;
