// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { StyledButtonLink } from "../ButtonLink";
import { StyledButton } from "../Button";
import { borderRadius, rtlSpacing } from "../utils/rtl";

import type { Props } from "./index";

const StyledButtonGroup = styled.div`
  display: flex;

  & ${StyledButtonLink}, & ${StyledButton} {
    border-radius: ${({ connected }) => connected && "0"};
    margin: ${({ theme, connected }) =>
      rtlSpacing(
        connected ? theme.orbit.marginButtonGroupConnected : theme.orbit.marginButtonGroup,
      )};

    &:first-child {
      border-radius: ${({ connected, theme }) =>
        connected &&
        borderRadius(`${theme.orbit.borderRadiusNormal} 0 0 ${theme.orbit.borderRadiusNormal}`)};
    }

    &:last-child {
      border-radius: ${({ connected, theme }) =>
        connected &&
        borderRadius(`0 ${theme.orbit.borderRadiusNormal} ${theme.orbit.borderRadiusNormal} 0`)};
      margin: 0;
    }
  }
`;

StyledButtonGroup.defaultProps = {
  theme: defaultTheme,
};

const ButtonGroup = ({ children, connected, dataTest }: Props) => (
  <StyledButtonGroup connected={connected} data-test={dataTest}>
    {children}
  </StyledButtonGroup>
);

export default ButtonGroup;
