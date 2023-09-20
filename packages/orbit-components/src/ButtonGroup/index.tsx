"use client";

import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { borderRadius, rtlSpacing } from "../utils/rtl";
import mq from "../utils/mediaQuery";
import type { Props } from "./types";

const StyledButtonGroup = styled.div`
  display: flex;

  .orbit-button-primitive {
    border-radius: 0;
    margin: ${({ theme }) => rtlSpacing(theme.orbit.marginButtonGroup)};

    :first-child {
      border-radius: ${borderRadius("6px 0 0 6px")};
    }

    :last-child {
      border-radius: ${borderRadius("0 6px 6px 0")};
      margin: 0;
    }
  }
  ${mq.tablet(css`
    .orbit-button-primitive {
      :first-child {
        border-radius: ${({ theme }) =>
          borderRadius(`${theme.orbit.borderRadiusNormal} 0 0 ${theme.orbit.borderRadiusNormal}`)};
      }
      :last-child {
        border-radius: ${({ theme }) =>
          borderRadius(`0 ${theme.orbit.borderRadiusNormal} ${theme.orbit.borderRadiusNormal} 0`)};
      }
    }
  `)};
`;

StyledButtonGroup.defaultProps = {
  theme: defaultTheme,
};

const ButtonGroup = ({ children, dataTest }: Props) => (
  <StyledButtonGroup data-test={dataTest}>{children}</StyledButtonGroup>
);

export default ButtonGroup;
