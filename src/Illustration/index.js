// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { SIZE_OPTIONS, baseURL } from "./consts";

import type { Props } from "./index";

const StyledImage = styled.img`
  height: ${({ tokens, size }) => tokens.height[size]};
  width: auto;
  background-color: transparent; // TODO: create token backgroundIllustration
  overflow: hidden;
`;

StyledImage.defaultProps = {
  theme: defaultTokens,
};

const Illustration = ({ name, size = SIZE_OPTIONS.MEDIUM }: Props) => {
  const tokens = {
    height: {
      [SIZE_OPTIONS.SMALL]: "90px",
      [SIZE_OPTIONS.MEDIUM]: "200px",
      // TODO: create tokens heightIllustration[size]
    },
  };

  return (
    <StyledImage
      src={`${baseURL}/illustrations/0x${parseInt(tokens.height[size], 10)}/${name}.png`}
      srcSet={`${baseURL}/illustrations/0x${parseInt(tokens.height[size], 10) * 2}/${name}.png 2x`}
      alt={name}
      size={size}
      tokens={tokens}
    />
  );
};

export default Illustration;
