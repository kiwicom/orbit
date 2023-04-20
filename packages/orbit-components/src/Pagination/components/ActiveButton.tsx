import * as React from "react";
import styled, { css } from "styled-components";

import type * as Common from "../../common/types";
import Button from "../../Button";
import defaultTheme from "../../defaultTheme";

interface Props {
  children: React.ReactNode;
  transparent?: boolean;
  size?: Common.InputSize;
}

const StyledButton = styled.div<Props>`
  ${({ theme, transparent }) => css`
    &:hover,
    &:active,
    &:focus {
      background: ${theme.orbit.backgroundButtonSecondary};
      color: ${theme.orbit.colorTextButtonSecondary};
      transform: none;
      cursor: default;
    }

    ${transparent &&
    css`
      &&& {
        background-color: transparent;
        box-shadow: none;
      }
    `};
  `}
`;

StyledButton.defaultProps = {
  theme: defaultTheme,
};

const ActiveButtonAsComponent =
  ({ transparent }) =>
  ({ children, ...props }: Props) => {
    return (
      <StyledButton {...props} transparent={transparent}>
        {children}
      </StyledButton>
    );
  };

const ActiveButton = ({ children, transparent, size }: Props) => {
  return (
    <Button type="secondary" size={size} asComponent={ActiveButtonAsComponent({ transparent })}>
      {children}
    </Button>
  );
};

export default ActiveButton;
