// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { SIZE_OPTIONS, baseURL } from "./consts";

import type { Props } from "./index";

const getHeight = (theme, size) => {
  const tokens = {
    height: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightServiceLogoSmall,
      [SIZE_OPTIONS.MEDIUM]: theme.orbit.heightServiceLogoMedium,
      [SIZE_OPTIONS.LARGE]: theme.orbit.heightServiceLogoLarge,
    },
  };
  return tokens.height[size];
};

const getColor = greyScale => (greyScale ? "logos-grayscale" : "logos");

export const StyledServiceLogo = styled(({ className, name, size, grayScale, theme, dataTest }) => (
  <img
    className={className}
    src={`${baseURL}/${getColor(grayScale)}/0x${parseInt(getHeight(theme, size), 10)}/${name}.png`}
    srcSet={`${baseURL}/${getColor(grayScale)}/0x${parseInt(getHeight(theme, size), 10) *
      2}/${name}.png 2x`}
    alt={name}
    data-test={dataTest}
  />
))`
  height: ${({ theme, size }) => getHeight(theme, size)};
  width: auto;
  background-color: transparent; // TODO: create token backgroundServiceLogo
`;

StyledServiceLogo.defaultProps = {
  theme: defaultTheme,
};

const ServiceLogo = ({ name, size = SIZE_OPTIONS.MEDIUM, grayScale = false, dataTest }: Props) => (
  <StyledServiceLogo name={name} size={size} grayScale={grayScale} dataTest={dataTest} />
);

export default ServiceLogo;
