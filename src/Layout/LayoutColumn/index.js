// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import getViewportHideStyles from "../../Hide/helpers/getViewportHideStyles";
import { StyledCard } from "../../Card";
import mq from "../../utils/mediaQuery";

import type { Props } from "./index";

const StyledColumn = styled.div`
  ${({ hideOn }) => !!hideOn && getViewportHideStyles(hideOn)};

  ${StyledCard} {
    margin: 0 -${({ theme }) => theme.orbit.spaceMedium};
    width: auto;
  }
  ${mq.tablet(css`
    ${StyledCard} {
      margin: auto;
      width: 100%;
    }
  `)};
`;

StyledColumn.defaultProps = {
  theme: defaultTheme,
};

const LayoutColumn = ({ children, hideOn, as = "div", dataTest }: Props) => {
  return (
    <StyledColumn data-test={dataTest} hideOn={hideOn} as={as}>
      {children}
    </StyledColumn>
  );
};

export default LayoutColumn;
