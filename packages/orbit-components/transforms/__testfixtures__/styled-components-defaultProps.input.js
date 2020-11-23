// @noflow
import React from "react";
import styled, { type StyledComponent } from "styled-components";

import defaultTheme from "../../src/defaultTheme";

export const TestProp: StyledComponent<{ ... }, typeof defaultTheme, *> = styled.div`
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
`;
TestProp.defaultProps = {
  theme: defaultTheme,
};

export const TestFn: StyledComponent<{ ... }, typeof defaultTheme, *> = styled("div")`
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
`;
TestFn.defaultProps = {
  theme: defaultTheme,
};

export const TestFnComplex: StyledComponent<{ ... }, typeof defaultTheme, *> = styled(props => (
  <div {...props} />
)).attrs(() => ({}))`
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
`;
TestFnComplex.defaultProps = {
  theme: defaultTheme,
};
