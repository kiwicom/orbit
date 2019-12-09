// @flow
import React from "react";
import styled, { css } from "styled-components";

import Stack from "../Stack";
import mq from "../utils/mediaQuery";
import { StyledTextLink } from "../TextLink";
import defaultTheme from "../defaultTheme";

const StyledLinkStack = styled.ul`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
`;

StyledLinkStack.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationLinkStackChild = styled(({ theme, direction, ...props }) => (
  <li {...props} />
))`
  ${({ direction }) =>
    direction === "column" &&
    css`
      width: 100%;
      ${StyledTextLink} {
        text-decoration: none;
        width: 100%;
        ${mq.tablet(
          css`
            width: auto;
          `,
        )};
      }
    `};
`;

StyledNavigationLinkStackChild.defaultProps = {
  theme: defaultTheme,
};

const LinkStack = ({ direction = "column", spacing, children, dataTest }) => (
  <StyledLinkStack data-test={dataTest}>
    <Stack direction={direction} spacing={spacing}>
      {React.Children.map(children, item => (
        <StyledNavigationLinkStackChild direction={direction}>
          {React.isValidElement(item) ? React.cloneElement(item) : item}
        </StyledNavigationLinkStackChild>
      ))}
    </Stack>
  </StyledLinkStack>
);

export default LinkStack;
