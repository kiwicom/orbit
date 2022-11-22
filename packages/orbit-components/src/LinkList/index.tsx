import * as React from "react";
import type { FlattenSimpleInterpolation } from "styled-components";
import styled, { css } from "styled-components";

import { left, rtlSpacing } from "../utils/rtl";
import mq from "../utils/mediaQuery";
import { StyledTextLink } from "../TextLink";
import defaultTheme from "../defaultTheme";
import { SPACINGS } from "../utils/layout/consts";
import getSpacing from "../Stack/helpers/getSpacing";
import getDirectionSpacingTemplate from "../Stack/helpers/getDirectionSpacingTemplate";
import type { Props } from "./types";

const StyledLinkList = styled.ul<{
  $indent?: Props["indent"];
  $direction: Props["direction"];
  $legacy?: Props["legacy"];
  $spacing: Props["spacing"];
}>`
  ${({ $indent, $direction, theme, $legacy, $spacing }) => css`
    display: flex;
    flex-direction: ${$direction};
    width: 100%;
    margin: 0;
    gap: ${!$legacy && $spacing && getSpacing(theme)[$spacing]};
    padding: 0;
    padding-${left}: ${$indent && theme.orbit.spaceXXSmall};
    list-style: none;
    font-size: ${theme.orbit.fontSizeTextNormal};
  `};
`;

StyledLinkList.defaultProps = {
  theme: defaultTheme,
};

const resolveSpacings = ({
  $legacy,
  $direction,
  theme,
  $spacing,
}): FlattenSimpleInterpolation | null => {
  const margin =
    $spacing &&
    $direction &&
    String(getDirectionSpacingTemplate($direction)).replace(
      "__spacing__",
      getSpacing(theme)[$spacing],
    );

  if (!$legacy) return null;

  return css`
    margin: ${margin && rtlSpacing(margin)};
    &:last-child {
      margin: 0;
    }
  `;
};

const StyledNavigationLinkListChild = styled.li<{
  $indent?: Props["indent"];
  $direction: Props["direction"];
  $legacy?: Props["legacy"];
  $spacing: Props["spacing"];
}>`
  ${({ $direction, $spacing, $legacy, theme }) => css`
    ${StyledTextLink} {
      text-decoration: none;
    }

    ${resolveSpacings({ $direction, $spacing, $legacy, theme })};

    ${$direction === "column" &&
    css`
      width: 100%;
      ${StyledTextLink} {
        width: 100%;
        ${mq.tablet(
          css`
            width: auto;
          `,
        )};
      }
    `};
  `}
`;

StyledNavigationLinkListChild.defaultProps = {
  theme: defaultTheme,
};

const LinkList = ({
  direction = "column",
  indent,
  legacy = false,
  spacing = SPACINGS.MEDIUM,
  children,
  dataTest,
}: Props) => (
  <StyledLinkList
    $indent={indent}
    $direction={direction}
    data-test={dataTest}
    $legacy={legacy}
    $spacing={spacing}
  >
    {React.Children.map(children, item => {
      if (React.isValidElement(item)) {
        return (
          <StyledNavigationLinkListChild $direction={direction} $spacing={spacing} $legacy={legacy}>
            {item}
          </StyledNavigationLinkListChild>
        );
      }
      return null;
    })}
  </StyledLinkList>
);

export default LinkList;
