import styled, { css } from "styled-components";
import React from "react";

import useTheme from "../../src/hooks/useTheme";
import defaultTheme from "../../src/defaultTheme";

/* eslint-disable @typescript-eslint/ban-ts-comment */

const StyledComponent = styled.div`
  color: ${({ theme }) => theme.orbit.paletteInkLighter};
`;

StyledComponent.defaultProps = {
  // @ts-ignore
  theme: defaultTheme,
};

const StyledComponentSecond = styled.div`
  ${({ theme }) => css`
    color: ${theme.orbit.paletteInkLighter};
  `}
`;

StyledComponentSecond.defaultProps = {
  // @ts-ignore
  theme: defaultTheme,
};

const Component = () => {
  const theme = useTheme();
  return <div>{theme.orbit.paletteInkLighter}</div>;
};

<Component />;
