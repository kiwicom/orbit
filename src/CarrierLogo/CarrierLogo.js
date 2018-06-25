// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";

import { SIZE_OPTIONS, baseURL } from "./consts";
import type { Props } from "./CarrierLogo";

const StyledCarrierLogo = styled.div`
  background-color: ${({ theme }) => theme.backgroundCarrierLogo};
  height: ${({ theme, tokens, size, carriers }) =>
    carriers.length > 1 ? `${theme.heightIconLarge}` : `${tokens.renderSizes[size]}px`};
  width: ${({ tokens, theme, size, carriers }) =>
    carriers.length > 1 ? `${theme.widthIconLarge}` : `${tokens.renderSizes[size]}px`};
  display: flex;
  flex-direction: ${({ carriers }) => (carriers.length > 1 ? "column" : "row")};
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
`;
const StyledImage = styled.img`
  height: ${({ imageSize }) => imageSize}px;
  width: ${({ imageSize }) => imageSize}px;
  background-color: ${({ theme }) => theme.backgroundCarrierLogo};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  overflow: hidden;
  &:last-child {
    align-self: flex-end;
  }
`;

const CarrierLogo = (props: Props) => {
  const { size = SIZE_OPTIONS.LARGE, carriers, theme = defaultTokens } = props;
  const tokens = {
    directorySizes: {
      [SIZE_OPTIONS.SMALL]: 16,
      [SIZE_OPTIONS.MEDIUM]: 32,
      [SIZE_OPTIONS.LARGE]: 32,
    },
    retinaSizes: {
      [SIZE_OPTIONS.SMALL]: 32,
      [SIZE_OPTIONS.MEDIUM]: 64,
      [SIZE_OPTIONS.LARGE]: 64,
    },
    renderSizes: {
      [SIZE_OPTIONS.SMALL]: parseInt(theme.heightIconSmall, 10),
      [SIZE_OPTIONS.MEDIUM]: parseInt(theme.heightIconMedium, 10),
      [SIZE_OPTIONS.LARGE]: parseInt(theme.heightIconLarge, 10),
    },
  };
  const sourceSize =
    carriers.length > 1 ? tokens.directorySizes[SIZE_OPTIONS.SMALL] : tokens.directorySizes[size];
  const imageSize =
    carriers.length > 1 ? tokens.renderSizes[SIZE_OPTIONS.SMALL] : tokens.renderSizes[size];
  const srcSetSize =
    carriers.length > 1 ? tokens.retinaSizes[SIZE_OPTIONS.SMALL] : tokens.retinaSizes[size];

  return (
    <StyledCarrierLogo carriers={carriers} tokens={tokens} size={size} theme={theme}>
      {carriers.slice(0, 4).map(carrierImage => {
        const type = carrierImage.type === undefined ? "airline" : carrierImage.type;
        return (
          <StyledImage
            key={carrierImage.code}
            src={`${baseURL}/airlines/${sourceSize}/${carrierImage.code}.png?default=${type}.png`}
            srcSet={`${baseURL}/airlines/${srcSetSize}/${
              carrierImage.code
            }.png?default=${type}.png 2x`}
            alt={carrierImage.name}
            title={carrierImage.name}
            imageSize={imageSize - (carriers.length > 2 ? 1 : 0)}
            tokens={tokens}
            theme={theme}
          />
        );
      })}
    </StyledCarrierLogo>
  );
};

export default CarrierLogo;
