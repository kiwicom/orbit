import React from "react";
import { OrbitProvider } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

import { commonTabStyle } from "./Tab";

type ThemeShape = React.ComponentProps<typeof OrbitProvider>["theme"];

export const getStackOffset = (theme: ThemeShape) => theme.orbit.space400;

export const StyledWrapper = styled.button.attrs({ type: "button" })`
  ${({ theme }) => css`
    position: relative;
    display: block;
    width: 100%;
    padding-right: calc(${getStackOffset(theme)} * 2);
  `}
`;
// needs to be a <span> to be a valid child of <button>
const StyledStack = styled.span`
  ${({ theme }) => css`
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: calc(100% - ${getStackOffset(theme)} * 2);
    &::before,
    &::after {
      ${commonTabStyle};
      content: "";
      display: block;
      width: 100%;
      position: absolute;
    }
    &::after {
      top: ${theme.orbit.space200};
      left: ${getStackOffset(theme)};
    }
    &::before {
      top: calc(${theme.orbit.space200} * 2);
      left: calc(${getStackOffset(theme)} * 2);
    }
  `};
`;

interface Props {
  children: React.ReactNode;
}

export default function StackOfTabs({ children }: Props) {
  return (
    <StyledWrapper>
      <StyledStack />
      {children}
    </StyledWrapper>
  );
}
