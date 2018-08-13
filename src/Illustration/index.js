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

const getURL = (retina = false) => ({ theme, size, illustrationName }) => {
  const height = parseInt(getHeightToken({ theme, size }), 10);
  return retina
    ? `${baseURL}/illustrations/0x${height * 2}/${illustrationName}.png 2x`
    : `${baseURL}/illustrations/0x${height}/${illustrationName}.png`;
};

export const StyledImage = styled.img.attrs({
  src: getURL(),
  srcSet: getURL(true),
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
  />
);

export default Illustration;
