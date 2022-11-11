import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme, { Theme } from "../defaultTheme";
import { SIZE_OPTIONS, BASE_URL } from "./consts";
import { Props, CarrierType, Size, Carrier } from "./types";

interface StyledProps {
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

const getCarrierLogoSize = ({ theme, carriersLength, size }) => {
  const defaultSizes =
    carriersLength > 1
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
  ({ carrierType = "airline", carriersLength, size, code }) => {
    const urlSizes =
      carriersLength > 1 ? getURLSizes({ size: SIZE_OPTIONS.SMALL }) : getURLSizes({ size });
    return {
      src: `${BASE_URL}/airlines/${urlSizes.base}x${urlSizes.base}/${code}.png?default=${carrierType}.png`,
      srcSet: `${BASE_URL}/airlines/${urlSizes.retina}x${urlSizes.retina}/${code}.png?default=${carrierType}.png 2x`,
    };
  },
)`
  ${({ theme, rounded }: StyledProps) => css`
    background-color: ${theme.orbit.backgroundCarrierLogo};
    border-radius: ${rounded ? theme.orbit.borderRadiusCircle : theme.orbit.borderRadiusNormal};
    height: ${getCarrierLogoSize};
    width: ${getCarrierLogoSize};
    &:last-child {
      align-self: flex-end;
    }
  `}
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

export const StyledCarrierLogo = styled.div<{ theme: Theme; carriers: Carrier[]; size: Size }>`
  ${({ theme, carriers, size }) => css`
    background-color: ${theme.orbit.backgroundCarrierLogo};
    height: ${carriers.length > 1
      ? theme.orbit.heightIconLarge
      : `${getRenderSize({ theme, size })}px`};
    width: ${carriers.length > 1
      ? theme.orbit.widthIconLarge
      : `${getRenderSize({ theme, size })}px`};
    display: flex;
    flex-direction: ${carriers.length > 1 ? "column" : "row"};
    flex-wrap: ${carriers.length > 2 && "wrap"};
    align-content: space-between;
    justify-content: space-between;
  `}
`;

StyledCarrierLogo.defaultProps = {
  theme: defaultTheme,
};

const CarrierLogo = ({ size = SIZE_OPTIONS.LARGE, carriers, dataTest, id, rounded }: Props) => (
  <StyledCarrierLogo carriers={carriers} size={size} data-test={dataTest} id={id}>
    {carriers.slice(0, 4).map(carrierImage => (
      <StyledImage
        key={carrierImage.code}
        rounded={rounded}
        carrierType={carrierImage.type}
        carriersLength={carriers.length}
        code={carrierImage.code}
        size={size}
        alt={carrierImage.name}
        title={carrierImage.name}
      />
    ))}
  </StyledCarrierLogo>
);
export default CarrierLogo;
