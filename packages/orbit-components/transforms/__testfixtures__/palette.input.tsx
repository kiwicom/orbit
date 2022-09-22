import styled from "styled-components";
import React from "react";

import useTheme from "../../src/hooks/useTheme";
import defaultTheme from "../../src/defaultTheme";

/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
const StyledComponent = styled.div`
  color: ${({ theme }) => theme.orbit.paletteInkLighter};
`;

StyledComponent.defaultProps = {
  theme: defaultTheme,
};

const StyledComponentSecond = styled.div`
  color: ${({ theme }) => theme.orbit.paletteInkLight};
`;

StyledComponentSecond.defaultProps = {
  theme: defaultTheme,
};

const StyledComponentThird = styled.div`
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
`;

StyledComponentThird.defaultProps = {
  theme: defaultTheme,
};

const StyledComponentFourth = styled.div`
  color: ${({ theme }) => theme.orbit.paletteCloudDarker};
`;

StyledComponentFourth.defaultProps = {
  theme: defaultTheme,
};

const Component = () => {
  const theme = useTheme();
  // @ts-ignore
  return <div>{theme.orbit.paletteInkLighter}</div>;
};

<Component />;
