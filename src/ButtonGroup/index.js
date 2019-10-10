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

  ${StyledButtonLink}, ${StyledButton} {
    border-radius: 0;
    margin: ${({ theme }) => rtlSpacing(theme.orbit.marginButtonGroup)};

    :first-child {
      border-radius: ${({ theme }) =>
        borderRadius(`${theme.orbit.borderRadiusNormal} 0 0 ${theme.orbit.borderRadiusNormal}`)};
    }

    :last-child {
      border-radius: ${({ theme }) =>
        borderRadius(`0 ${theme.orbit.borderRadiusNormal} ${theme.orbit.borderRadiusNormal} 0`)};
      margin: 0;
    }
  }
`;

StyledButtonGroup.defaultProps = {
  theme: defaultTheme,
};

const ButtonGroup = ({ children, dataTest }: Props) => (
  <StyledButtonGroup data-test={dataTest}>{children}</StyledButtonGroup>
);

export default ButtonGroup;
