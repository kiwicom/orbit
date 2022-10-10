import styled from "styled-components";
import * as React from "react";

import useTheme from "../../src/hooks/useTheme";
import defaultTheme from "../../src/defaultTheme";

/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
const StyledComponent = styled.div`
  color: ${({ theme }) => theme.orbit.paletteInkLight};
`;

StyledComponent.defaultProps = {
  theme: defaultTheme,
};

const StyledComponentSecond = styled.div`
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
`;

StyledComponentSecond.defaultProps = {
  theme: defaultTheme,
};

const StyledComponentThird = styled.div`
  color: ${({ theme }) => theme.orbit.paletteInkDark};
`;

StyledComponentThird.defaultProps = {
  theme: defaultTheme,
};

const StyledComponentFourth = styled.div`
  color: ${({ theme }) => theme.orbit.paletteCloudDark};
`;

StyledComponentFourth.defaultProps = {
  theme: defaultTheme,
};

const StyledComponentFifth = styled.div`
  color: ${({ theme }) => theme.orbit.paletteCloudNormal};
`;

StyledComponentFifth.defaultProps = {
  theme: defaultTheme,
};

const Component = () => {
  const theme = useTheme();
  // @ts-ignore
  return <div>{theme.orbit.paletteInkLight}</div>;
};

<Component />;
