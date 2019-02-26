// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { SIZE_OPTIONS, baseURL } from "./consts";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from "./index";

const getHeightToken = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.heightIllustrationSmall,
    [SIZE_OPTIONS.MEDIUM]: theme.orbit.heightIllustrationMedium,
  };
  return tokens[size];
};

export const StyledImage = styled.img.attrs(({ theme, size, illustrationName }) => {
  const height = parseInt(getHeightToken({ theme, size }), 10);

  return {
    src: `${baseURL}/illustrations/0x${height}/${illustrationName}.png`,
    srcSet: `${baseURL}/illustrations/0x${height *
      2}/${illustrationName}.png 2x, ${baseURL}/illustrations/0x${height *
      3}/${illustrationName}.png 3x`,
  };
})`
  height: ${getHeightToken};
  width: auto;
  background-color: ${({ theme }) => theme.orbit.backgroundIllustration};
  margin-bottom: ${getSpacingToken};
`;

StyledImage.defaultProps = {
  theme: defaultTokens,
};

const Illustration = ({ name, size = SIZE_OPTIONS.MEDIUM, dataTest, spaceAfter }: Props) => (
  <StyledImage
    illustrationName={name}
    alt={name}
    size={size}
    data-test={dataTest}
    spaceAfter={spaceAfter}
    crossOrigin="anonymous"
  />
);

export default Illustration;
