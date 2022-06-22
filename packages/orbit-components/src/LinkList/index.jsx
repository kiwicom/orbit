// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { left } from "../utils/rtl";
import mq from "../utils/mediaQuery";
import { StyledTextLink } from "../TextLink";
import defaultTheme from "../defaultTheme";
import { SPACINGS } from "../utils/layout/consts";
import getSpacing from "../Stack/helpers/getSpacing";

import type { Props } from ".";

const StyledLinkList = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  width: 100%;
  margin: 0;
  padding: 0;
  padding-${left}: ${({ indent, theme }) => indent && theme.orbit.spaceXXSmall};
  list-style: none;
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLinkList.defaultProps = {
  theme: defaultTheme,
};

const resolveSpacings = ({ spacing, direction, ...props }) => {
  const gap = getSpacing(props)[spacing];
  return css`
    gap: ${gap};
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
  spacing = SPACINGS.MEDIUM,
  children,
  id,
  dataTest,
}: Props): React.Node => (
  <StyledLinkList indent={indent} direction={direction} data-test={dataTest} id={id}>
    {React.Children.map(children, item => {
      if (React.isValidElement(item)) {
        return (
          <StyledNavigationLinkListChild direction={direction} spacing={spacing}>
            {item}
          </StyledNavigationLinkListChild>
        );
      }
      return null;
    })}
  </StyledLinkList>
);

export default LinkList;
