import * as React from "react";
import styled, { css } from "styled-components";

import type { Theme } from "../defaultTheme";
import defaultTheme from "../defaultTheme";
import { left } from "../utils/rtl";
import { SIZE_OPTIONS, BASE_URL } from "./consts";
import type { Props, CarrierType, Size, Carrier } from "./types";

interface StyledProps {
  inlineStacked: boolean;
  rounded?: boolean;
  carrierType?: CarrierType;
  carriersLength: number;
  size: Size;
  theme: Theme;
  code: string;
}

const getRenderSize = ({ theme, size }) => {
  const renderSizes = {
    [SIZE_OPTIONS.SMALL]: parseInt(theme.orbit.heightIconSmall, 10),
    [SIZE_OPTIONS.MEDIUM]: parseInt(theme.orbit.heightIconMedium, 10),
    [SIZE_OPTIONS.LARGE]: parseInt(theme.orbit.heightIconLarge, 10),
  };
  return renderSizes[size];
};

const getCarrierLogoSize = ({ theme, carriersLength, size, inlineStacked }) => {
  const defaultSizes =
    carriersLength > 1 && !inlineStacked
      ? getRenderSize({ theme, size: SIZE_OPTIONS.SMALL })
      : getRenderSize({ theme, size });

  return `${defaultSizes - (carriersLength > 2 ? 1 : 0)}px`;
};

const getURLSizes = ({ size }) => {
  const urlSizes = {
    base: {
      [SIZE_OPTIONS.SMALL]: 16,
      [SIZE_OPTIONS.MEDIUM]: 32,
      [SIZE_OPTIONS.LARGE]: 32,
    },
    retina: {
      [SIZE_OPTIONS.SMALL]: 32,
      [SIZE_OPTIONS.MEDIUM]: 64,
      [SIZE_OPTIONS.LARGE]: 64,
    },
  };
  return {
    base: urlSizes.base[size],
    retina: urlSizes.retina[size],
  };
};

const StyledImage = styled.img.attrs<StyledProps>(
  ({ carrierType = "airline", carriersLength, size, code, inlineStacked }) => {
    const urlSizes =
      carriersLength > 1 && !inlineStacked
        ? getURLSizes({ size: SIZE_OPTIONS.SMALL })
        : getURLSizes({ size });

    return {
      src: `${BASE_URL}/airlines/${urlSizes.base}x${urlSizes.base}/${code}.png?default=${carrierType}.png`,
      srcSet: `${BASE_URL}/airlines/${urlSizes.retina}x${urlSizes.retina}/${code}.png?default=${carrierType}.png 2x`,
    };
  },
)`
  ${({ theme, rounded, inlineStacked }: StyledProps) => css`
    background-color: ${theme.orbit.backgroundCarrierLogo};
    border-radius: ${rounded ? theme.orbit.borderRadiusCircle : theme.orbit.borderRadiusNormal};
    height: ${getCarrierLogoSize};
    width: ${getCarrierLogoSize};
    border: ${inlineStacked && `1px solid ${theme.orbit.paletteWhite}`};
    box-shadow: ${inlineStacked && `${theme.orbit.boxShadowFixed}, ${theme.orbit.boxShadowRaised}`};

    &:not(:first-child) {
      margin-${left}: ${inlineStacked && `calc(-1 * ${theme.orbit.spaceXSmall})`};
    }

    &:last-child {
      align-self: ${!inlineStacked && "flex-end"};
    }
  `}
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

export const StyledCarrierLogo = styled.div<{
  theme: typeof defaultTheme;
  carriers: Carrier[];
  size: Size;
  inlineStacked?: boolean;
}>`
  ${({ theme, carriers, size, inlineStacked }) => css`
    background-color: ${theme.orbit.backgroundCarrierLogo};
    height: ${carriers.length > 1 && !inlineStacked
      ? theme.orbit.heightIconLarge
      : `${getRenderSize({ theme, size })}px`};
    width: ${carriers.length > 1
      ? theme.orbit.widthIconLarge
      : `${getRenderSize({ theme, size })}px`};
    display: flex;
    flex-direction: ${carriers.length > 1 && !inlineStacked ? "column" : "row"};
    flex-wrap: ${carriers.length > 2 && !inlineStacked && "wrap"};
    align-content: space-between;
    justify-content: space-between;
  `}
`;

StyledCarrierLogo.defaultProps = {
  theme: defaultTheme,
};

const CarrierLogo = ({
  size = SIZE_OPTIONS.LARGE,
  carriers,
  dataTest,
  id,
  rounded,
  inlineStacked = false,
}: Props) => (
  <StyledCarrierLogo
    carriers={carriers}
    size={size}
    data-test={dataTest}
    id={id}
    inlineStacked={inlineStacked}
  >
    {carriers.slice(0, 4).map(carrierImage => (
      <StyledImage
        key={carrierImage.code}
        rounded={rounded}
        carrierType={carrierImage.type}
        carriersLength={carriers.length}
        code={carrierImage.code}
        size={size}
        inlineStacked={inlineStacked}
        alt={carrierImage.name}
        title={carrierImage.name}
      />
    ))}
  </StyledCarrierLogo>
);
export default CarrierLogo;
