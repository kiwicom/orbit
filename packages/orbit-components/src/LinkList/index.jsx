// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import type { CSSRules } from "styled-components";

import { left, rtlSpacing } from "../utils/rtl";
import mq from "../utils/mediaQuery";
import { StyledTextLink } from "../TextLink";
import defaultTheme from "../defaultTheme";
import { SPACINGS } from "../utils/layout/consts";
import getSpacing from "../Stack/helpers/getSpacing";
import getDirectionSpacingTemplate from "../Stack/helpers/getDirectionSpacingTemplate";

import type { Props } from ".";

const StyledLinkList = styled.ul`
  ${({ indent, direction, theme, $legacy, spacing }) => css`
    display: flex;
    flex-direction: ${direction};
    width: 100%;
    margin: 0;
    gap: ${!$legacy && spacing && getSpacing({ theme })[spacing]};
    padding: 0;
    padding-${left}: ${indent && theme.orbit.spaceXXSmall};
    list-style: none;
    font-size: ${theme.orbit.fontSizeTextNormal};
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLinkList.defaultProps = {
  theme: defaultTheme,
};

const resolveSpacings = ({ spacing, $legacy, direction, ...props }): CSSRules | null => {
  const margin =
    spacing &&
    direction &&
    String(getDirectionSpacingTemplate(direction)).replace(
      "__spacing__",
      getSpacing(props)[spacing],
    );

  if (!$legacy) return null;

  return css`
    margin: ${margin && rtlSpacing(margin)};
    &:last-child {
      margin: 0;
    }
  `;
};

const StyledNavigationLinkListChild = styled(({ theme, direction, ...props }) => <li {...props} />)`
  ${StyledTextLink} {
    text-decoration: none;
  }

  ${resolveSpacings};

  ${({ direction }) =>
    direction === "column" &&
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
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
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
}: Props): React.Node => (
  <StyledLinkList
    indent={indent}
    direction={direction}
    data-test={dataTest}
    $legacy={legacy}
    spacing={spacing}
  >
    {React.Children.map(children, item => {
      if (React.isValidElement(item)) {
        return (
          <StyledNavigationLinkListChild direction={direction} spacing={spacing} $legacy={legacy}>
            {item}
          </StyledNavigationLinkListChild>
        );
      }
      return null;
    })}
  </StyledLinkList>
);

export default LinkList;
