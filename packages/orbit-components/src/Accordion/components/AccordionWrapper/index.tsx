import styled, { css } from "styled-components";
import React from "react";

import type { Props } from "./types";
import type { Theme } from "../../../defaultTheme";
import defaultTheme, { ThemeProps } from "../../../defaultTheme";
import mq from "../../../utils/mediaQuery";

export const getBorder = ({ theme }: ThemeProps): string =>
  `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`;

export const getBorderRadius = ({ theme }: ThemeProps): string =>
  `${theme.orbit.borderRadiusNormal}`;

const CardElement = css`
  ${({ theme, expanded }: { theme: Theme; expanded?: boolean }) => css`
    width: 100%;
    box-sizing: border-box;
    position: relative;
    box-shadow: ${expanded && theme.orbit.boxShadowActionActive};
    border-top: ${!expanded && getBorder};
    background: ${theme.orbit.backgroundCard};
    ${mq.largeMobile(css`
      border-left: ${!expanded && getBorder};
      border-right: ${!expanded && getBorder};
    `)};
  `};
`;

const StyledAccordionWrapper = styled.div<{ expanded?: boolean }>`
  ${CardElement};
  border: ${getBorder};
  border-radius: ${getBorderRadius};
  transition: margin ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  margin: ${({ theme }) => theme.orbit.spaceXSmall} 0;
`;

StyledAccordionWrapper.defaultProps = {
  theme: defaultTheme,
};

const AccordionWrapper = ({ dataTest, initialExpanded, ...props }: Props) => (
  <StyledAccordionWrapper
    {...props}
    expanded={props.expanded || initialExpanded}
    data-test={dataTest}
  />
);

export default AccordionWrapper;
