// @flow
import React, { useMemo } from "react";
import styled, { css } from "styled-components";

import Button from "../../Button";
import defaultTheme from "../../defaultTheme";
import type { Props } from "./ActiveButton";

const StyledButton = styled.div`
  &:hover,
  &:active,
  &:focus {
    background: ${({ theme }) => theme.orbit.backgroundButtonSecondary};
    color: ${({ theme }) => theme.orbit.colorTextButtonSecondary};
    transform: none;
    cursor: default;
  }

  ${({ transparent }) =>
    transparent &&
    css`
      &&& {
        background-color: transparent;
      }
    `};
`;

StyledButton.defaultProps = {
  theme: defaultTheme,
};

const ActiveButton = ({ children, transparent, size }: Props) => {
  const Component = useMemo(
    () => props => <StyledButton {...props} type={undefined} transparent={transparent} />,
    [transparent],
  );
  return (
    <Button type="secondary" size={size} component={Component}>
      {children}
    </Button>
  );
};

export default ActiveButton;
