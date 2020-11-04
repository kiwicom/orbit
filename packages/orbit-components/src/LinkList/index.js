// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { left } from "../utils/rtl";
import Stack from "../Stack";
import mq from "../utils/mediaQuery";
import { StyledTextLink } from "../TextLink";
import defaultTheme from "../defaultTheme";
import { SPACINGS } from "../Stack/consts";

import type { Props } from "./index";

const StyledLinkList = styled.ul`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-${left}: ${({ indent, theme }) => indent && theme.orbit.spaceXXSmall};
  list-style: none;
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
`;

StyledLinkList.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationLinkListChild = styled(({ theme, direction, ...props }) => <li {...props} />)`
  ${StyledTextLink} {
    text-decoration: none;
  }

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

StyledNavigationLinkListChild.defaultProps = {
  theme: defaultTheme,
};

const LinkList = ({
  direction = "column",
  indent,
  spacing = SPACINGS.MEDIUM,
  children,
  dataTest,
}: Props) => (
  <StyledLinkList indent={indent} data-test={dataTest}>
    <Stack direction={direction} spacing={spacing}>
      {React.Children.map(children, item => {
        if (React.isValidElement(item)) {
          return (
            <StyledNavigationLinkListChild direction={direction}>
              {item}
            </StyledNavigationLinkListChild>
          );
        }

        return null;
      })}
    </Stack>
  </StyledLinkList>
);

export default LinkList;
