import React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import { SIZE_OPTIONS, baseURL } from "./consts";
import getSpacingToken from "../../common/getSpacingToken";
import type { Size, Props } from "./types";
import { marginUtility } from "../../utils/common";
import useTheme from "../../hooks/useTheme";

const getHeightToken = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.EXTRASMALL]: theme.orbit.heightIllustrationSmall,
    [SIZE_OPTIONS.SMALL]: "120px", // TODO: add token
    [SIZE_OPTIONS.MEDIUM]: theme.orbit.heightIllustrationMedium,
    [SIZE_OPTIONS.LARGE]: "280px", // TODO: create token heightIllustrationLarge
    [SIZE_OPTIONS.DISPLAY]: "460px", // TODO: create token heightIllustrationDisplay
  };
  return tokens[size];
};

export const StyledImage = styled.img.attrs<{
  size: Size;
  illustrationName: string;
}>(({ theme, size, illustrationName }) => {
  const height = parseInt(getHeightToken({ theme, size }), 10);
  const illustrationPath = `${illustrationName}-Q85.png`;
  return {
    src: `${baseURL}/illustrations/0x${height}/${illustrationPath}`,
    srcSet: `${baseURL}/illustrations/0x${
      height * 2
    }/${illustrationPath} 2x, ${baseURL}/illustrations/0x${height * 3}/${illustrationPath} 3x`,
  };
})`
  ${({
    theme,
    margin,
    size,
  }: {
    theme: typeof defaultTheme;
    illustrationName: string;
    margin: Props["margin"];
    size: Props["size"];
  }) => css`
    display: inline-block;
    margin: auto 0;
    max-height: ${getHeightToken({ theme, size })};
    max-width: 100%;
    background-color: ${theme.orbit.backgroundIllustration};
    flex-shrink: 0;
    ${marginUtility(margin)};
  `};
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

const IllustrationPrimitive = ({
  name,
  alt,
  margin,
  size = SIZE_OPTIONS.MEDIUM,
  dataTest,
  id,
  // TODO: remove spaceAfter in the next major version
  spaceAfter,
}: Props) => {
  const theme = useTheme();

  return (
    <StyledImage
      illustrationName={name}
      alt={typeof alt === "string" ? alt : name}
      size={size}
      id={id}
      margin={spaceAfter ? { bottom: getSpacingToken({ spaceAfter, theme }) } : margin}
      data-test={dataTest}
    />
  );
};

export default IllustrationPrimitive;
